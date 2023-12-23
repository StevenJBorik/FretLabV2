import { h, FunctionComponent } from 'preact';
import './Pricing.css';

interface PricingProps {
  path: string;
}

const Pricing: FunctionComponent<PricingProps> = ({ path }) => {
  return (
    <div class="pricing-container">
      <div class="pricing-header">
        <h1>Choose Your Plan</h1>
        <p>
          Find the right plan for your needs and start enjoying all the
          features.
        </p>
      </div>
      <div class="plans-container">
        <div class="plan free-plan">
          <h2>Free</h2>
          <p>For hobbyists who enjoy occasional access to features.</p>
          <ul class="features-list">
            <li>Play 3 unique songs per day</li>
            <li>Key/Song Sections for any song</li>
            <li>Fretboard Movement</li>
          </ul>
          <button class="plan-select-btn">Select Free</button>
        </div>
        <div class="plan premium-plan">
          <h2>Premium</h2>
          <p>For enthusiasts who want full access and extra features.</p>
          <ul class="features-list">
            <li>All Free features</li>
            <li>Unlimited song library</li>
            <li>Offline access</li>
            <li>Priority support</li>
          </ul>
          <div class="price-info">
            <span class="discount-tag">5000% Discount!</span>
            <div class="price">
              <span class="old-price">$9310.16/month</span>
              <span class="new-price">$1.99/month</span>
            </div>
          </div>
          <button class="plan-select-btn premium">Get Premium</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
