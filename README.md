# LlamaTutor powered by LlamaEdge/Gaia

This project is a fork of the [Original Project](https://github.com/Nutlope/llamatutor).

## Changes in This Fork

In this fork, I have introduced several enhancements to allow the customization of the server and model used by the application. The primary changes are as follows:

### Environment Variables

Three new environment variables have been added to the `.env` file:
- `SERPER_API_KEY`: The serach API key for searching content online. You can also use `BING_API_KEY` here.
- `HELICONE_API_KEY`: The Helicone API key for observability.
- `LLAMAEDGE_BASE_URL`: URL for the LLM API base URL.
- `LLAMAEDGE_MODEL_NAME`: Name of the model to be used.
- `LLAMAEDGE_API_KEY`: API key for accessing the LLM services.

These variables allow you to customize the URL and use your own server and model. The default values for these variables are:

```plaintext
LLAMAEDGE_BASE_URL=https://llama.us.gaianet.network/v1
LLAMAEDGE_MODEL_NAME=llama
LLAMAEDGE_API_KEY=LlamaEdge
```

## How to Use

### 1. Clone the Repository and navigate to the Project Directory:
```bash
git clone https://github.com/JYC0413/llamatutor.git
cd llamatutor
```

### 2. Create and Configure the .env File:
```bash
cp .example.env .env
```

Update the .env file with your desired values for the new variables:
```plaintext
LLAMAEDGE_BASE_URL=https://your-custom-url/v1
LLAMAEDGE_MODEL_NAME=your-custom-model
LLAMAEDGE_API_KEY=your-api-key
```

Apply for Serpre API key [here](https://serper.dev/) and Helicone API key [here](https://www.helicone.ai/).

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
npm run dev
```
or
```bash
yarn start
```

By configuring these environment variables, you can point the application to your own LLM server and model, providing greater flexibility and customization.
