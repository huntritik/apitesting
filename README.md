# Playwright Login Automation

A Playwright automation project to test login functionality on the Practice Test Automation website.

## Project Structure

```
├── pages/
│   └── LoginPage.ts          # Page Object Model for login page
├── tests/
│   └── login.spec.ts         # Test specifications
├── .env                       # Environment variables (credentials & URL)
├── playwright.config.ts       # Playwright configuration
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # This file
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Update the `.env` file with your credentials:
```
BASE_URL=https://practicetestautomation.com/practice-test-login/
USERNAME=student
PASSWORD=Password123
```

**Note:** For the practice site, use:
- Username: `student`
- Password: `Password123`

### 3. Run Tests

#### Run all tests (headless)
```bash
npm test
```

#### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

#### Run tests in debug mode
```bash
npm run test:debug
```

#### Run tests with UI mode
```bash
npm run test:ui
```

## Test Coverage

The test suite includes:

1. **Valid Login Test** - Tests successful login with correct credentials
2. **Invalid Username Test** - Tests error handling with wrong username
3. **Invalid Password Test** - Tests error handling with wrong password
4. **Empty Credentials Test** - Tests validation with empty fields

## Page Object Model (POM)

The `LoginPage` class provides methods to interact with the login page:

- `navigate(url)` - Navigate to the login page
- `enterUsername(username)` - Enter username in the input field
- `enterPassword(password)` - Enter password in the input field
- `clickSubmit()` - Click the submit button
- `login(username, password)` - Perform complete login action
- `getErrorMessage()` - Retrieve error message text
- `isLoginSuccessful()` - Check if login was successful
- `getPageTitle()` - Get page title

## Key Features

✅ Page Object Model pattern for maintainability
✅ Environment variables for credentials management
✅ Error handling and validation checks
✅ Cross-browser testing (Chrome, Firefox, Safari)
✅ Screenshot on failure
✅ HTML test reports

## Troubleshooting

- If tests fail, check the `playwright-report/` folder for detailed HTML reports
- Screenshots of failures are saved in `test-results/`
- Update locators in `LoginPage.ts` if the website structure changes
