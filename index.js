import "dotenv/config";
import app from './src/app.js';

const PORT = 7000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;