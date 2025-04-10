# Asset Management Node API

## Overview
This is a Node.js-based API for managing assets, locations, breakdowns, departments, depreciation rules, maintenance, utilization logs, and more. The project is structured with TypeScript and uses Webpack for bundling.

## Project Structure
```
akshay0497-assetmanagementnodeapi/
├── build-config.js        # Build configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── webpack.config.js     # Webpack bundling configuration
├── scripts/
│   └── obfuscate.js      # Script for code obfuscation
├── src/
│   ├── index.ts          # Main entry point of the API
│   ├── config/
│   │   └── db.ts         # Database configuration
│   ├── controllers/      # API controllers
│   ├── docs/             # API documentation (Swagger)
│   ├── routes/           # API routes
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/akshay0497-assetmanagementnodeapi.git
   cd akshay0497-assetmanagementnodeapi
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure the environment variables in a `.env` file.

## Running the Application
### Development Mode
```sh
npm run dev
```
### Production Mode
```sh
npm run build
npm start
```

## API Endpoints
The API includes the following modules:
- **Help Creation**
- **Asset Location Management**
- **Breakdown Management**
- **Bulk Asset Management**
- **Department Management**
- **Depreciation Rules Management**
- **Maintenance & Warranty Management**
- **Resource General Information Management**
- **Status Management**
- **Utilization Log Management**
- **Ward Management**
- **Zone Management**
- **Purchase Details**
- **Resource Issue & Return**
- **Resource Type Management**

## API Documentation
Swagger documentation is available. To view it, start the application and visit:
```
http://localhost:PORT/docs
```

## Contributing
1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch and create a pull request.

## License
This project is licensed under the MIT License.

## Contact Information
For any queries or support, please contact:
- **Email:** 1997akshay04@gmail.com
- **GitHub:** [akshay0497](https://github.com/akshay0497)
- **LinkedIn:** [akshay0497](https://www.linkedin.com/in/akshay0497)

