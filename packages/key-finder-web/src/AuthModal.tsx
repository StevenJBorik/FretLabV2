import { h, Component } from 'preact';
import './AuthModal.css';

interface AuthModalState {
  isLogin: boolean;
  username: string;
  password: string;
  email: string;
  errors: {
    username: string;
    password: string;
    email: string;
  };
}

class AuthModal extends Component<{}, AuthModalState> {
  state: AuthModalState = {
    isLogin: true,
    username: '',
    password: '',
    email: '',
    errors: {
      username: '',
      password: '',
      email: '',
    },
  };

  validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  validatePassword = (password: string): boolean => {
    // Example: Minimum eight characters, at least one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const { name, value } = target;
    this.setState({ [name]: value } as any);
  };

  handleSubmit = (event: Event) => {
    event.preventDefault();
    const { username, password, email, isLogin } = this.state;

    // Reset errors
    this.setState({
      errors: { username: '', password: '', email: '' },
    });

    let isValid = true;
    const errors = { username: '', password: '', email: '' };

    if (!username) {
      errors.username = 'Username is required';
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
      this.setState({ errors });
      return;
    }

    // Process form submission
    // TODO: Integrate with backend for authentication
  };

  toggleForm = () => {
    this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
  };

  render() {
    const { isLogin, errors } = this.state;

    return (
      <div className="auth-modal">
        <form onSubmit={this.handleSubmit} className="auth-form">
          <h2>{isLogin ? 'Log in' : 'Create account'}</h2>

          <div className="input-group">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username (required)"
              className={errors.username ? 'input-error' : ''}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password (required)"
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          {!isLogin && (
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={this.state.email}
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
        </form>
        <button onClick={this.toggleForm} className="toggle-form-btn">
          {isLogin ? 'Create an account' : 'Have an account? Log in'}
        </button>
      </div>
    );
  }
}

export default AuthModal;
