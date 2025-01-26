# CI/CD Pipeline for React App Using GitHub Actions and Netlify Build Hooks

This documentation outlines the setup and configuration of a CI/CD pipeline for a React application hosted on GitHub, leveraging GitHub Actions for building, testing, and analyzing the code and Netlify Build Hooks for deployment.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Workflow Structure](#workflow-structure)
4. [Prerequisites](#prerequisites)
5. [Setup Instructions](#setup-instructions)
6. [Secrets Configuration](#secrets-configuration)
7. [Netlify Build Hook Setup](#netlify-build-hook-setup)
8. [How It Works](#how-it-works)
9. [Known Issues and Debugging](#known-issues-and-debugging)

---

## Introduction

This CI/CD pipeline is designed to automate the development lifecycle of a React application, ensuring efficient building, testing, analysis, and deployment to Netlify. It uses GitHub Actions to manage workflows and Netlify Build Hooks to trigger deployment automatically.

---

## Features

- **Code Checkout**: Pulls the latest changes from the repository.
- **Dependency Installation**: Installs all required npm dependencies for the React application.
- **Code Analysis**: Uses SonarCloud for static code analysis.
- **Build Process**: Builds the React application for deployment.
- **Deployment**: Triggers Netlify deployment using Build Hooks.

---

## Workflow Structure

The workflow consists of two main jobs:
1. **Build, Test, and Analyze**: This job performs code checkout, installs dependencies, runs tests, and analyzes the code using SonarCloud.
2. **Trigger Deployment**: This job triggers a Netlify Build Hook for deployment based on branch conditions.

---

## Prerequisites

1. A GitHub repository for your React application.
2. Netlify account and site setup for hosting.
3. Build Hook URL created in Netlify (for deployment).
4. SonarCloud account (if using code analysis).
5. Secrets configured in GitHub for secure credential storage.

---

## Setup Instructions

### 1. Clone the Repository
Ensure your React app code is in a GitHub repository.

### 2. Configure Netlify
- Create a site in Netlify and configure it to deploy from GitHub.
- Navigate to **Site Settings > Build & Deploy > Build Hooks** and create a Build Hook for the branch to deploy (e.g., `main`).

### 3. Configure Secrets in GitHub
Go to **Settings > Secrets** in your GitHub repository and add the following secrets:

| Name                     | Description                         |
|--------------------------|-------------------------------------|
| `SONAR_TOKEN`            | Token for SonarCloud authentication. |
| `NETLIFY_BUILD_HOOK_URL` | URL for triggering Netlify deployment. |

---

## Secrets Configuration

1. **`SONAR_TOKEN`**: Obtain this token from your SonarCloud account by navigating to **My Account > Security > Tokens**.
2. **`NETLIFY_BUILD_HOOK_URL`**: Copy the Build Hook URL created in Netlify.

---

## Netlify Build Hook Setup

1. Go to **Site Settings > Build & Deploy > Build Hooks** in Netlify.
2. Click **Add Build Hook** and configure it for the desired branch (e.g., `main`).
3. Copy the generated URL and store it in the GitHub secret `NETLIFY_BUILD_HOOK_URL`.

---

## How It Works

1. **Push or Pull Request**:
   - Triggered when code is pushed or a pull request is created on `main` or `staging` branches.

2. **Build, Test, and Analyze**:
   - The workflow checks out code, installs dependencies, runs tests, and performs static analysis using SonarCloud.

3. **Trigger Deployment**:
   - After successful build and tests, a `curl` command is used to trigger the Netlify Build Hook, initiating deployment on Netlify.

---

## Known Issues and Debugging

- **Build Fails Due to Missing Secrets**:
  Ensure `SONAR_TOKEN` and `NETLIFY_BUILD_HOOK_URL` are correctly configured in the GitHub repository secrets.

- **Deployment Fails on Netlify**:
  Check the Netlify Build Logs for errors.

- **SonarCloud Fails**:
  Ensure the project key and organization match the SonarCloud settings.

---

This documentation and pipeline ensure a smooth CI/CD process for your React application with GitHub Actions and Netlify. For any additional configurations, feel free to extend the workflow.

