const { Parents } = require("../config/db");

const createNewUserParent = async ({
  idDoc,
  fotoDocumento,
  name,
  lastName,
  educationLevel,
  profession,
  address,
  jobAddress,
  telephone,
  jobTelephone,
  contactCellphone,
  email,
  tutor,
}) => {
  try {
    // Validación de datos
    if (!idDoc || !email || !name || !lastName) {
      throw new Error('Datos incompletos o incorrectos');
    }

    const newUserParent = await Parents.create({
      idDoc,
      fotoDocumento,
      name,
      lastName,
      educationLevel,
      profession,
      address,
      jobAddress,
      telephone,
      jobTelephone,
      contactCellphone,
      email,
      tutor,
    });

    // Realiza operaciones adicionales si es necesario

    return newUserParent;
  } catch (error) {
    console.error('Error al crear el padre:', error);
    throw new Error('Error al crear el padre');
  }
};

module.exports = {
  createNewUserParent,
};
