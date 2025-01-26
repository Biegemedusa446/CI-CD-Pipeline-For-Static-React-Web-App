# Automated Static Website Deployment Using React and GitHub Actions

This repository contains the configuration for a CI/CD pipeline for a React application using GitHub Actions and Netlify Build Hooks. The pipeline automates the process of building, testing, analyzing, and deploying the application. Below is a detailed explanation of the workflow.

## Workflow Overview

### Workflow Name: `CI/CD Pipeline for React App`

#### Trigger Events:
- Pushes to the `main` or `staging` branches.
- Pull requests targeting the `main` or `staging` branches.

#### Environment Variables:
- `BRANCH_NAME`: Determines the branch name for conditional steps.

### Jobs in the Workflow

#### 1. Build, Test, Analyze, and Scan
This job installs dependencies, runs a security scan, analyzes the code, and builds the React application.

**Steps:**
1. **Checkout Code:**
   - Uses the `actions/checkout@v3` action to fetch the latest code.

2. **Install Dependencies:**
   - Navigates to the `my-react-app` directory and runs `npm install` to install the required dependencies.

3. **Trivy Security Scan:**
   - Utilizes the `aquasecurity/trivy-action` to scan the codebase for vulnerabilities of severity `HIGH` or `CRITICAL`.
   - Results are saved in `trivy-results.txt`.

4. **SonarCloud Analysis:**
   - Leverages the `SonarSource/sonarcloud-github-action@v2` to perform static code analysis.
   - SonarCloud configuration is set via repository secrets for security.

5. **Build React Application:**
   - Runs `npm run build` to create a production build of the React application.

#### 2. Trigger Netlify Build Hook
This job triggers a Netlify build hook to deploy the application after the build is successful.

**Steps:**
1. **Checkout Code:**
   - Uses the `actions/checkout@v3` action.

2. **Install Dependencies (Optional):**
   - Runs `npm install` if additional setup is required for the deployment step.

3. **Trigger Netlify Build Hook:**
   - Executes a `curl` command to POST to the Netlify build hook URL stored in `NETLIFY_BUILD_HOOK_URL` secret.

## Special Notes
- **SonarCloud Local Setup:**
  The SonarCloud scan was configured to run exclusively in the CI/CD pipeline instead of using a local Docker setup. This decision was made because of persistent `connection refused` errors with local Docker and the high cost of using AWS as an alternative.

- **Security Considerations:**
  All sensitive tokens (e.g., `SONAR_TOKEN`, `NETLIFY_BUILD_HOOK_URL`, `GITHUB_TOKEN`) are stored securely as GitHub repository secrets.

## Prerequisites
- A React application located in the `my-react-app` directory.
- Netlify Build Hook URL added as a repository secret (`NETLIFY_BUILD_HOOK_URL`).
- SonarCloud project configuration with organization and project keys.
- Trivy for security scanning configured with the `aquasecurity/trivy-action`.

## How to Use
1. Clone the repository.
2. Push code changes to `main` or `staging` branches to trigger the workflow.
3. Monitor the pipeline's progress on the Actions tab of your GitHub repository.
4. Verify deployment on Netlify.

## Limitations
- The pipeline relies on external services (Netlify, SonarCloud), which may have rate limits or downtime.
- Local SonarCloud analysis via Docker was not configured due to connectivity issues.

## Troubleshooting
- Ensure that all required secrets are added to the GitHub repository.
- Verify the Netlify build hook URL is correct.
- If Trivy scan results are too verbose, adjust the severity levels or output format as needed.

---

Feel free to customize the workflow further to fit your project's needs. If you encounter any issues, consult the respective service documentation or reach out for assistance.

