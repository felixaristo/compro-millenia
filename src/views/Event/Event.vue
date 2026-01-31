<template>
  <div class="event-container">
    <!-- Header Section -->
    <div class="event-header">
      <img :src="headerImage" alt="Event Header" class="header-image">
    </div>

    <!-- Webinar Details Section -->
    <!-- <div class="webinar-details">
      <h2>WEBINAR Smarter Expense Control : Cut Costs, Enforce Policy, and Gain Real-Time Visibility</h2>
      <p class="date">Friday, March 13<sup>th</sup> 2026</p>
      <p class="time">02.00 p.m. WIB | 03.00 p.m. WITA | 03.00 p.m. SGT</p>
    </div> -->

    <!-- Main Content -->
    <div class="event-content">
      <div class="left-section">
        <h2>Join our 1-hour webinar and live demo by Helios Hands Global to see how Helios AI-Based Expense & Travel Management—used by worldwide leading companies—helps organizations cut unnecessary costs, enforce policies consistently, and gain real-time visibility into employee spending through a smarter, AI-driven approach.</h2>
        
        <div class="speaker-section">
          <h3>SPEAKER</h3>
          <div class="speaker-card">
            <img src="@/assets/img/speaker.png" alt="Dr. Jesús Barrasa" class="speaker-image">
            <div class="speaker-info">
              <h4>Dr. Jesús Barrasa</h4>
              <p class="speaker-title">Field CTO - GenAI</p>
              <p class="speaker-bio">Dr. Jesús Barrasa is the Field CTO for AI at Neo4j, where he works with organizations combining the power of LLMs with Knowledge Graphs. He co-authored "Building Knowledge Graphs" (O'Reilly 2023) and is cohost of the Going Meta live webcast (<a href="https://goingmeta.live/">https://goingmeta.live/</a>). Jesús holds a Ph.D. in Artificial Intelligence/Knowledge Representation and is an active thought leader in the KG and AI space.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="right-section">
        <div class="form-container">
          <h3>Watch Now</h3>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input 
                v-model="form.firstName" 
                type="text" 
                placeholder="First Name" 
                required
              >
            </div>

            <div class="form-group">
              <input 
                v-model="form.lastName" 
                type="text" 
                placeholder="Last Name" 
                required
              >
            </div>

            <div class="form-group">
              <input 
                v-model="form.email" 
                type="email" 
                placeholder="Email Address" 
                required
              >
            </div>

            <div class="form-group">
              <input 
                v-model="form.company" 
                type="text" 
                placeholder="Company Name" 
                required
              >
            </div>

            <div class="form-group">
              <select v-model="form.jobRole" required>
                <option value="">Select Job Role</option>
                <option>CFO / Finance Director</option>
                <option>Finance Manager</option>
                <option>Financial Controller</option>
                <option>Head of Finance</option>
                <option>HR Director / Head of HR</option>
                <option>HR Manager</option>
                <option>IT Manager / Head of IT</option>
                <option>Enterprise Systems / ERP Manager</option>
                <option>Internal Audit / Compliance Manager</option>
                <option>Head of Operations / Operations Manager</option>
                <option value="other">Others (Specific)</option>
              </select>
            </div>

            <!-- Conditional custom role input when user picks Other -->
            <div class="form-group" v-if="form.jobRole === 'other'">
              <input
                v-model="form.customRole"
                type="text"
                placeholder="Please specify your job role"
              >
            </div>

            <div class="form-group">
              <input 
                v-model="form.phone" 
                type="tel" 
                placeholder="628111698682" 
                required
              >
            </div>

            <div class="form-group checkbox">
              <input 
                v-model="form.isGovernmentRelated" 
                type="checkbox" 
                id="government"
              >
              <label for="government">Is your work government-related?</label>
            </div>

            <div class="form-group">
              <input 
                v-model="form.country" 
                type="text" 
                placeholder="Country" 
                required
              >
            </div>

            <button type="submit" class="submit-btn" :disabled="isLoading">
              {{ isLoading ? 'Submitting...' : 'Submit' }}
            </button>

            <p class="disclaimer">The information you provide will be used in accordance with Neo4j's Privacy Policy, including in respect of marketing our products, events and services.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventHeaderImg from '@/assets/img/event-header.png'

export default {
  name: 'Event',
  data() {
    return {
      headerImage: eventHeaderImg,
      apiEndpoint: import.meta.env.VITE_BASE_URL_API + 'event/register', // Replace dengan API endpoint Anda
      isLoading: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobRole: '',
        customRole: '',
        phone: '',
        isGovernmentRelated: false,
        country: ''
      }
    }
  },
  methods: {
    async handleSubmit() {
      this.isLoading = true;
      try {
        // If user selected "Other", require custom role
        if (this.form.jobRole === 'other' && !this.form.customRole.trim()) {
          this.isLoading = false;
          alert('Please specify your job role.');
          return;
        }

        // Prepare data (use customRole when jobRole === 'other')
        const payload = {
          firstname: this.form.firstName,
          lastname: this.form.lastName,
          email: this.form.email,
          company: this.form.company,
          role: this.form.jobRole === 'other' ? this.form.customRole : this.form.jobRole,
          phone: this.form.phone,
          government_related: this.form.isGovernmentRelated,
          country: this.form.country
        };

        console.log('Sending data to API:', payload);

        // Uncomment untuk production
        const response = await fetch(this.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }

        const result = await response.json();
        console.log('API Response:', result);

        // Success handling
        alert('Thank you for registering! We will contact you soon.');
        this.resetForm();
      } catch (error) {
        console.error('Error submitting form:', error);
        alert(`Error: ${error.message}`);
      } finally {
        this.isLoading = false;
      }
    },
    resetForm() {
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobRole: '',
        customRole: '',
        phone: '',
        isGovernmentRelated: false,
        country: ''
      };
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.event-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  background-color: #f5f5f5;
}

/* Header Section */
.event-header {
  width: 100%;
  overflow: hidden;
}

.header-image {
  width: 100%;
  height: auto;
  display: block;
}

.header-content h1 {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 16px;
  line-height: 1.2;
}

.header-content p {
  font-size: 16px;
  margin-bottom: 24px;
  opacity: 0.9;
}

.contact-btn {
  background-color: #c77dbe;
  color: white;
  border: 2px solid #c77dbe;
  padding: 10px 24px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background-color: transparent;
  color: #c77dbe;
}

.header-visual {
  font-size: 120px;
  opacity: 0.3;
}

/* Webinar Details Section */
.webinar-details {
  background-color: #e8e8e8;
  padding: 30px 40px;
  border-top: 1px solid #ddd;
}

.webinar-details h2 {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.4;
}

.webinar-details .date {
  font-size: 16px;
  color: #333;
  font-weight: 500;
  margin-bottom: 8px;
}

.webinar-details .time {
  font-size: 15px;
  color: #666;
  margin-bottom: 0;
}

/* Main Content */
.event-content {
  display: flex;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
}

.left-section {
  flex: 1;
}

.left-section h2 {
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin-bottom: 40px;
  font-weight: 400;
}

/* Speaker Section */
.speaker-section {
  margin-top: 40px;
}

.speaker-section h3 {
  font-size: 12px;
  font-weight: 700;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

.speaker-card {
  display: flex;
  gap: 20px;
}

.speaker-image {
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 50%;
  object-fit: contain;
  object-position: center;
}

.speaker-info h4 {
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.speaker-title {
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
}

.speaker-bio {
  font-size: 14px;
  line-height: 1.5;
  color: #555;
}

/* Right Section - Form */
.right-section {
  flex: 1;
}

.form-container {
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-container h3 {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 32px;
}

.form-group {
  margin-bottom: 16px;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #c77dbe;
  box-shadow: 0 0 0 2px rgba(199, 125, 190, 0.1);
}

.form-group.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.form-group.checkbox input {
  width: auto;
  margin: 0;
}

.form-group.checkbox label {
  font-size: 14px;
  color: #333;
  cursor: pointer;
  margin: 0;
}

.submit-btn {
  width: 100%;
  padding: 14px;
  background-color: #1b4d6d;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}

.submit-btn:hover:not(:disabled) {
  background-color: #0f3550;
}

.submit-btn:disabled {
  background-color: #999;
  cursor: not-allowed;
  opacity: 0.7;
}

.disclaimer {
  font-size: 12px;
  color: #999;
  margin-top: 16px;
  line-height: 1.4;
}

/* Responsive */
@media (max-width: 768px) {
  .event-header {
    flex-direction: column;
    padding: 40px 20px;
  }

  .header-content h1 {
    font-size: 32px;
  }

  .event-content {
    flex-direction: column;
    padding: 40px 20px;
  }

  .form-container {
    padding: 24px;
  }
}
</style>
