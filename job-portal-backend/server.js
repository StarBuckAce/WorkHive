const express = require('express');
const cors = require('cors');
const app = express();

const jobRoutes = require('./routes/jobRoutes');
const applicationRoutes = require('./routes/applicationroutes');

app.use(cors());
app.use(express.json());

app.use('/api/jobs', jobRoutes);
app.use('/api/applications', applicationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
