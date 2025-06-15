const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const messageRoutes = require('./routes/messageRoutes');
const therapyRoutes = require('./routes/therapyRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const blogRoutes = require('./routes/blogRoutes');
const anonymousRoutes = require('./routes/anonymousRoutes');
const progressRoutes = require('./routes/progressRoutes');
const availabilityRoutes = require('./routes/availabilityRoutes');
const anonFriendRoutes = require('./routes/anonFriendRoutes');
const anonMessageRoutes = require('./routes/anonMessageRoutes');
const adminRoutes = require('./routes/adminRoutes');



dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/therapy', therapyRoutes);
app.use('/api/subscription', subscriptionRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/anonymous', anonymousRoutes);
app.use('/api/progress', progressRoutes);
app.use('/api/availability', availabilityRoutes);
app.use('/api/anon-friends', anonFriendRoutes);
app.use('/api/anon-messages', anonMessageRoutes);
app.use('/api/admin', adminRoutes);

module.exports = app;