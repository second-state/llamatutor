# My Forked Project

This project is a fork of the [Original Project](https://github.com/Nutlope/llamatutor).

## Changes in This Fork

In this fork, I have introduced several enhancements to allow the customization of the server and model used by the application. The primary changes are as follows:

### Environment Variables

Three new environment variables have been added to the `.env` file:

- `LLAMAEDGE_BASE_URL`: URL for the LlamaEdge server.
- `LLAMAEDGE_MODEL_NAME`: Name of the LlamaEdge model to be used.
- `LLAMAEDGE_API_KEY`: API key for accessing LlamaEdge services.

These variables allow you to customize the URL and use your own server and model. The default values for these variables are:

```plaintext
LLAMAEDGE_BASE_URL=https://llama.us.gaianet.network/v1
LLAMAEDGE_MODEL_NAME=llama
LLAMAEDGE_API_KEY=LlamaEdge
```

## How to Use

### 1. Clone the Repository:
```bash
git clone https://github.com/JYC0413/llamatutor.git
```

### 2. Navigate to the Project Directory:
```bash
cd llamatutor
```

### 3. Create and Configure the .env File:
```bash
cp .example.env .env
```

Update the .env file with your desired values for the new variables:
```plaintext
LLAMAEDGE_BASE_URL=https://your-custom-url/v1
LLAMAEDGE_MODEL_NAME=your-custom-model
LLAMAEDGE_API_KEY=your-api-key
```

### 4. Install Dependencies:
```bash
npm install
```
or
```bash
yarn
```

### 5. Run the Application:
```bash
npm start
```
or
```bash
yarn start
```

By configuring these environment variables, you can point the application to your own LlamaEdge server and model, providing greater flexibility and customization.