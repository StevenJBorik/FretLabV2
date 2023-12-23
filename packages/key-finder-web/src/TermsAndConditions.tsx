// TermsAndConditions.tsx

import { h, FunctionComponent } from 'preact';
import './TermsAndConditions.css';

const TermsAndConditions: FunctionComponent = () => {
  return (
    <div class="terms-conditions-container">
      <h1>Terms and Conditions</h1>
      <section>
        <h2>1. Welcome to Fretlabs</h2>
        <p>
          Welcome to Fretlabs, a sole proprietorship with a placeholder address.
          By accessing or using the Fretlabs services, which include our
          website, applications, and embedded services via third-party websites,
          you agree to comply with and be bound by these terms and conditions.
          If you disagree with any part of these terms, please do not use our
          services.
        </p>
      </section>
      <section>
        <h2>2. Your Use</h2>
        <p>
          The Fretlabs services are for your personal, non-commercial use. They
          are licensed to you, not sold or transferred. Our services are
          described on the About page and include the use of embedded YouTube
          videos, which are subject to{' '}
          <a
            href="https://www.youtube.com/t/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube's Terms of Service
          </a>
          .
        </p>
      </section>
      <section>
        <h2>3. Subscriptions</h2>
        <p>
          Our subscription model includes monthly or other periodic renewals
          unless you notify us before the renewal date that you wish to cancel.
          The renewal fee will be charged via direct debit.
        </p>
      </section>
      <section>
        <h2>5. Fees and Payments</h2>
        <p>
          Some parts of Fretlabs are free, while others require payment. Prices
          and payment for the subscription will be displayed on our website. Any
          changes to subscription pricing will be communicated to you in
          advance.
        </p>
      </section>
      <section>
        <h2>6. Refunds</h2>
        <p>
          New customers purchasing yearly subscriptions may cancel within 14
          days for a full refund. After this period, no refunds will be
          provided.
        </p>
      </section>
      <section>
        <h2>7. Account and Password</h2>
        <p>
          You are responsible for keeping your account information and password
          secure. Fretlabs is not liable for any loss from unauthorized use of
          your account.
        </p>
      </section>
      <section>
        <h2>9. Rights</h2>
        <p>
          All materials and services provided by Fretlabs are owned by us or our
          licensors. You are granted a license to use them according to these
          terms, but all ownership rights remain with us.
        </p>
      </section>
      <section>
        <h2>10. No Endorsement</h2>
        <p>
          Links to other websites or content do not imply Fretlabs' endorsement.
          We are not responsible for external content.
        </p>
      </section>
      <section>
        <h2>11. Complaints</h2>
        <p>
          If you have any complaints, please contact us at support@fretlabs.net,
          and we will respond within 14 days.
        </p>
      </section>
      <section>
        <h2>12. Notice and Takedown</h2>
        <p>
          If you believe that content available through Fretlabs infringes your
          rights, please contact us at retract@fretlabs.net with details of the
          infringement.
        </p>
      </section>
      <section>
        <h2>13. Applicable Law</h2>
        <p>
          Your use of Fretlabs, these terms, and any disputes arising are
          subject to the laws of the United States of America.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
