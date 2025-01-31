# 🚀 Automated Static Website Deployment Using React and GitHub Actions  

This repository contains the configuration for a CI/CD pipeline for a React application using GitHub Actions and Netlify Build Hooks. The pipeline automates the process of building, testing, analyzing, and deploying the application.  

<details>
<summary><strong>📖 Workflow Overview</strong></summary>  
<strong>Workflow Name:</strong> `CI/CD Pipeline for React App`  

### 🎯 Trigger Events:  
- Pushes to the `main` or `staging` branches.  
- Pull requests targeting the `main` or `staging` branches.  

### 🔧 Environment Variables:  
- `BRANCH_NAME`: Determines the branch name for conditional steps.  
</details>  

<details>
<summary><strong>🛠 Jobs in the Workflow</strong></summary>  

### ✅ Build, Test, Analyze, and Scan  
This job installs dependencies, runs a security scan, analyzes the code, and builds the React application.  

#### 🔹 Steps:  
1. **Checkout Code:**  
   - Uses the `actions/checkout@v3` action to fetch the latest code.  

2. **Install Dependencies:**  
   - Navigates to the `my-react-app` directory and runs `npm install` to install the required dependencies.  

3. **Trivy Security Scan:**  
   - Utilizes `aquasecurity/trivy-action@master` to scan the codebase for vulnerabilities of severity `HIGH` or `CRITICAL`.  

4. **SonarCloud Analysis:**  
   - Leverages `SonarSource/sonarcloud-github-action@v2` to perform static code analysis.  
   - Configuration includes project keys and repository secrets.  

5. **Build React Application:**  
   - Runs `CI='' npm run build` to create a production build of the React application.  

6. **Upload Build Artifact:**  
   - Uses `actions/upload-artifact@v4` to store the build for deployment.  
</details>  

<details>
<summary><strong>🚀 Deploy React App to Netlify</strong></summary>  
This job deploys the React application to Netlify after a successful build.  

#### 🔹 Steps:  
1. **Checkout Code:**  
   - Uses the `actions/checkout@v3` action.  

2. **Download Build Artifact:**  
   - Retrieves the build files using `actions/download-artifact@v4`.  

3. **Set Netlify Site ID Based on Branch:**  
   - Assigns the appropriate Netlify site ID depending on whether the branch is `main` or `staging`.  

4. **Deploy to Netlify:**  
   - Uses `South-Paw/action-netlify-deploy@v1.2.0` for deployment.  
   - Configured with GitHub secrets for authentication.  
</details>  

<details>
<summary><strong>🔐 Security Considerations</strong></summary>  
- All sensitive tokens (e.g., `SONAR_TOKEN`, `NETLIFY_AUTH_TOKEN`, `GITHUB_TOKEN`, `PRODUCTION_NETLIFY_SITE_ID`, `STAGING_NETLIFY_SITE_ID`) are securely stored as GitHub repository secrets.  
</details>  

<details>
<summary><strong>⚙️ Prerequisites</strong></summary>  
- A React application located in the `my-react-app` directory.  
- Netlify authentication tokens and site IDs stored as secrets.  
- SonarCloud project configuration with organization and project keys.  
- Trivy for security scanning configured with `aquasecurity/trivy-action`.  
</details>  

<details>
<summary><strong>📌 How to Use</strong></summary>  
1. Clone the repository.  
2. Push code changes to `main` or `staging` branches to trigger the workflow.  
3. Monitor the pipeline's progress on the Actions tab of your GitHub repository.  
4. Verify deployment on Netlify.  
</details>  

<details>
<summary><strong>⚠️ Limitations</strong></summary>  
- The pipeline relies on external services (Netlify, SonarCloud), which may have rate limits or downtime.  
- Local SonarCloud analysis via Docker was not configured due to connectivity issues.  
</details>  

<details>
<summary><strong>🛠 Troubleshooting</strong></summary>  
- Ensure that all required secrets are added to the GitHub repository.   
- If Trivy scan results are too verbose, adjust the severity levels or output format as needed.  
</details>  
