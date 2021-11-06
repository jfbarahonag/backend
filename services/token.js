let jwt = require("jsonwebtoken");

module.exports = {
  encode: async (user) => {
    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      'FreseSecretaParaCodificarToken!"·$%&/()=?¿|@#~€€¬',
      { expiresIn: 86400 }
    );
    return token;
  },
};
