const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = mongoose.Schema;

const IDSchema = new Schema({
  IDNo: {
    type: Number
  },
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const PassportSchema = new Schema({
  passportNo: {
    type: Number
  },
  placeOfIssue: {
    type: String
  },
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const NationalSeamanBookSchema = new Schema({
  SeamanBookNo: {
    type: Number
  },
  placeOfIssue: {
    type: String
  },
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const NationalCertificateSchema = new Schema({
  CertType: {
    type: String
  },
  CertNo: {
    type: Number
  },
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const NationalGOCSchema = new Schema({
  GOCType: {
    type: String
  },
  GOCNo: {
    type: Number
  },
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const InternationalMedicalCertSchema = new Schema({
  CertNo: {
    type: Number
  },
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const VaccinationSchema = new Schema({
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const approvedMarlinsTestSchema = new Schema({
  TestNo: {
    type: Number
  },
  Result: {
    type: Number
  }
});

const certificateSchema = new Schema({
  CertType: {
    type: String
  },
  CerteNo: {
    type: Number
  },
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const DPcertificateSchema = new Schema({
  CertType: {
    type: String
  },
  CerteNo: {
    type: Number
  },
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const FlagEndorsementSchema = new Schema({
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const FlagSeamanBookSchema = new Schema({
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  }
});

const WorkExperienceSchema = new Schema({
  company: {
    type: String
  },
  designation: {
    type: String
  },
  nameOfVessel: {
    type: String
  },
  DPtype: {
    type: String
  },
  periodOfServiceFrom: {
    type: Date
  },
  periodOfServiceTo: {
    type: Date
  },
  areaWorked: {
    type: Boolean
  },
  deckEngine: {
    type: Boolean
  },
  GRT: {
    type: Boolean
  },
  engineType: {
    type: String
  },
  offshoreVessel: {
    type: String
  }
});

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  designation: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },

  acceptToActInLowRank: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  placeOfBirth: {
    type: String
  },
  Nationality: {
    type: String
  },
  Religion: {
    type: String
  },
  Education: {
    type: String
  },
  militaryStatus: {
    type: String
  },
  ID: IDSchema,
  Passport: PassportSchema,
  nationalSeamanBook: NationalSeamanBookSchema,
  nationalCertificate: NationalCertificateSchema,
  nationalGOC: NationalGOCSchema,
  internationalMedicalCert: InternationalMedicalCertSchema,
  vaccination: VaccinationSchema,
  bloodGroup: {
    type: String
  },
  nearestRegionalAirport: {
    type: String
  },
  contactTelephone: {
    type: Number
  },
  permanentAddress: {
    type: String
  },
  NextOfKin: {
    type: String
  },
  martialStatus: {
    type: String
  },
  coverallSize: {
    type: String
  },
  safetyShoeSize: {
    type: String
  },
  approvedMarlinsTest: approvedMarlinsTestSchema,
  DPcertificate: DPcertificateSchema,
  FlagEndorsement: FlagEndorsementSchema,
  flagSeamanBook: FlagSeamanBookSchema,
  certificates: [certificateSchema],
  WorkExperience: [WorkExperienceSchema]
});

const Profile = mongoose.model("Profile", profileSchema);

exports.Profile = Profile;
