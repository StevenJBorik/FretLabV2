import { h, Component } from 'preact';
import { route } from 'preact-router';
import './AuthModal.css';
import { jwtVerify } from 'jose';

const SECRET_KEY_BASE64 = 'gKHSkyVrtO9a2xm2/tnXIvHaGefr3fSU';
const secretKeyBinaryString = atob(SECRET_KEY_BASE64);
const secretKeyUint8Array = new Uint8Array(
  new ArrayBuffer(secretKeyBinaryString.length)
);

for (let i = 0; i < secretKeyBinaryString.length; i++) {
  secretKeyUint8Array[i] = secretKeyBinaryString.charCodeAt(i);
}

interface AuthModalState {
  isLogin: boolean;
  username: string;
  password: string;
  email: string;
  usernameOrEmail: string;
  currentPassword: string;
  newPassword: string;
  isChangingPassword: boolean;
  message: string;
  errors: {
    username: string;
    password: string;
    email: string;
    usernameOrEmail: string;
    form?: string;
    currentPassword?: string;
    newPassword?: string;
  };
  loading: boolean;
}

interface AuthModalProps {
  onSuccessfulLogin: (username: string) => void; // Function that takes a username and returns void
  onExit: () => void; // If you want a callback for when the modal should be closed without login
}

class AuthModal extends Component<AuthModalProps, AuthModalState> {
  state: AuthModalState = {
    isLogin: true,
    username: '',
    password: '',
    email: '',
    usernameOrEmail: '',
    currentPassword: '',
    newPassword: '',
    isChangingPassword: false,
    message: '',
    errors: {
      username: '',
      password: '',
      usernameOrEmail: '',
      email: '',
      form: '',
    },
    loading: false,
  };

  validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  validatePassword = (password: string): boolean => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    this.setState({ [name]: value } as any);
  };

  getUserIdFromToken = async (token) => {
    try {
      const { payload } = await jwtVerify(token, secretKeyUint8Array, {
        algorithms: ['HS256'],
      });
      return payload.user_id ? payload.user_id : null;
    } catch (error) {
      console.error('Error verifying token:', error);
      return null;
    }
  };
  handleSubmit = async (event: Event) => {
    event.preventDefault();
    const { username, password, email, usernameOrEmail, isLogin } = this.state;

    const token = localStorage.getItem('token');
    if (token && (await this.getUserIdFromToken(token))) {
      this.setState({ message: 'Already logged in.' });
      return;
    }

    this.setState({
      errors: { username: '', password: '', email: '', usernameOrEmail: '' },
      loading: true,
    });

    let isValid = true;
    const errors = {
      username: '',
      password: '',
      email: '',
      usernameOrEmail: '',
    };

    // if (!username) {
    //   errors.username = 'Username is required';
    //   isValid = false;
    // }

    if (!usernameOrEmail) {
      errors.usernameOrEmail = 'Username or Email is required';
      isValid = false;
    }

    if (!password || !this.validatePassword(password)) {
      errors.password = 'Password is invalid or missing';
      isValid = false;
    }

    if (!isLogin && (!email || !this.validateEmail(email))) {
      errors.email = 'Invalid email';
      isValid = false;
    }

    if (!isValid) {
      this.setState({ errors, loading: false });
      return;
    }

    const endpoint = isLogin
      ? 'http://localhost:8080/login'
      : 'http://localhost:8080/register';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          usernameOrEmail,
          password,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        localStorage.setItem('token', result.token);
        this.props.onSuccessfulLogin(result.username); // Call the passed in prop method
      } else {
        // Here, we set the state to display an error message if the credentials are invalid
        this.setState({
          errors: {
            ...this.state.errors,
            form: result.message || 'Invalid credentials. Please try again.',
          },
        });
      }
    } catch (error) {
      this.setState({
        errors: {
          ...this.state.errors,
          form: 'Network error, please try again later.',
        },
        message: 'Network error, please try again later.',
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  handlePasswordChange = async (event) => {
    event.preventDefault();
    const { currentPassword, newPassword } = this.state;
    const token = localStorage.getItem('token');
    const userId = await this.getUserIdFromToken(token);

    if (!userId) {
      this.setState({
        message: 'Unable to verify user identity.',
        errors: {
          ...this.state.errors,
          form: 'Unable to verify user identity.',
        },
      });
      return;
    }

    this.setState({ loading: true, message: '' });

    try {
      const response = await fetch('http://localhost:8080/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          user_id: userId,
          current_password: currentPassword,
          new_password: newPassword,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        this.setState({
          message: 'Password changed successfully.',
          isChangingPassword: false,
          currentPassword: '',
          newPassword: '',
        });
      } else {
        this.setState({
          message: result.message || 'Failed to change password.',
          errors: {
            ...this.state.errors,
            form: result.message || 'Failed to change password.',
          },
        });
      }
    } catch (error) {
      this.setState({
        message: 'Network error, please try again later.',
        errors: {
          ...this.state.errors,
          form: 'Network error, please try again later.',
        },
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from storage
    this.setState({ message: 'Logged out successfully.' });
    route('/');
  };

  toggleForm = () => {
    this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
  };

  initiatePasswordChange = () => {
    this.setState({ isChangingPassword: true });
  };

  cancelPasswordChange = () => {
    this.setState({ isChangingPassword: false });
  };

  render() {
    const {
      isLogin,
      isChangingPassword,
      errors,
      loading,
      username,
      password,
      email,
      currentPassword,
      newPassword,
      message,
    } = this.state;

    // Function to render the password change form
    const renderChangePasswordForm = () => (
      <form onSubmit={this.handlePasswordChange} className="auth-form">
        <h2>Change Password</h2>
        <div className="input-group">
          <input
            type="password"
            name="currentPassword"
            value={currentPassword}
            onChange={this.handleChange}
            placeholder="Current Password"
            className={errors.currentPassword ? 'input-error' : ''}
          />
          {errors.currentPassword && (
            <p className="error">{errors.currentPassword}</p>
          )}
        </div>
        <div className="input-group">
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={this.handleChange}
            placeholder="New Password"
            className={errors.newPassword ? 'input-error' : ''}
          />
          {errors.newPassword && <p className="error">{errors.newPassword}</p>}
        </div>
        <button type="submit" className="change-password-btn">
          Change Password
        </button>
        <button
          type="button"
          onClick={this.cancelPasswordChange}
          className="cancel-btn"
        >
          Cancel
        </button>
      </form>
    );

    const renderLoginForm = () => (
      <form onSubmit={this.handleSubmit} className="auth-form">
        <h2>{isLogin ? 'Log in' : 'Create account'}</h2>

        <div className="input-group">
          <input
            type="text"
            name="usernameOrEmail"
            value={this.state.usernameOrEmail}
            onChange={this.handleChange}
            placeholder="Username or Email"
            className={errors.usernameOrEmail ? 'input-error' : ''}
          />
          {errors.usernameOrEmail && (
            <p className="error">{errors.usernameOrEmail}</p>
          )}
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password (required)"
            className={errors.password ? 'input-error' : ''}
          />
          <p className="error">{errors.password || errors.form}</p>
        </div>

        {!isLogin && (
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="Email address (required)"
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
        )}

        <button
          type="submit"
          className={isLogin ? 'login-btn' : 'create-account-btn'}
        >
          {isLogin ? 'Log in' : 'Create account'}
        </button>
        {localStorage.getItem('token') && (
          <button onClick={this.handleLogout} className="logout-btn">
            Log Out
          </button>
        )}
      </form>
    );

    return (
      <div className="auth-modal">
        {loading && <div>Loading...</div>}
        {message && <div className="message">{message}</div>}
        {!loading && !message && !isChangingPassword && renderLoginForm()}
        {!loading && isChangingPassword && renderChangePasswordForm()}
        {!loading && !isChangingPassword && !message && (
          <button onClick={this.toggleForm} className="toggle-form-btn">
            {isLogin ? 'Create an account' : 'Have an account? Log in'}
          </button>
        )}

        {!loading &&
          !isChangingPassword &&
          isLogin && ( // Only show when isLogin is true
            <button
              onClick={this.initiatePasswordChange}
              className="change-password-init-btn"
            >
              Change Password
            </button>
          )}
      </div>
    );
  }
}

export default AuthModal;
