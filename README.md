## Invoice Generator Features

- Create and manage invoices.
- Real-time preview of the invoice.
- Validation and error handling for form inputs.
- Responsive design with Tailwind CSS.
- Toast notifications for user feedback.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Next.js**: Framework for server-rendered React applications.
- **Apollo Client**: GraphQL client for data management.
- **Yup**: Schema validation for form validation.
- **Formik**: Form management library.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **react-toastify**: Library for toast notifications.
- **react-select**: Customizable select input component for React.
- **country-list**: Library for getting a list of countries.

## Folder Structure

- **`/components`**: Contains React components used in the application.
  - **`/form`**: Contains form-related components such as `InvoiceForm`.
  - **`/common`**: Contains common components used across different parts of the application.
  - **`/preview`**: Contains components related to the preview functionality of the invoices.
- **`/graphql`**: Contains GraphQL queries, mutations, and Apollo client setup.
- **`/pages`**: Contains page components and API routes.
- **`/public`**: Contains static assets like images and icons.
- **`/app`**: Contains global CSS, Layout and Pages(routes).
- **`/utils`**: Contains utility functions, including toast functions.
- **`/types`**: Contains TypeScript type definitions.

## Running the Project

To run the project locally, follow these steps:
1. **Clone the repository**:
   ```bash
   git clone https://github.com/s-gillani-dev/Invoice-Generator

2. **Follow the below process**:
```bash
cd Invoice-Generator
npm install
#And then
npm run dev
# or
yarn dev
```
   