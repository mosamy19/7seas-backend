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
  rank: {
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
  },
  dateOfIssue: {
    type: Date
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
  },
  countryOfIssuing: {
    type: String
  }
});

const DPcertificateSchema = new Schema({
  CertType: {
    type: String
  },
  DPType: {
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
  },
  flagCountry: {
    type: String
  }
});

const FlagSeamanBookSchema = new Schema({
  dateOfIssue: {
    type: Date
  },
  dateOfExpiry: {
    type: Date
  },
  flagCountry: {
    type: String
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
  field: {
    type: String
  },
  charter: {
    type: String
  },
  deckEngine: {
    type: Boolean
  },
  GRT: {
    type: String
  },
  BHP: {
    type: String
  },
  engineType: {
    type: String
  },
  propulsionType: {
    type: String
  }
});

const NextOfKinSchema = new mongoose.Schema({
  name: {
    type: String
  },
  relation: {
    type: String
  },
  mobile: {
    type: String
  }
});

const contactTelephoneSchema = new mongoose.Schema({
  landLine: {
    type: Number
  },
  mobile: {
    type: Number
  },
  mobile2: {
    type: Number
  }
});
const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  designation: {
    type: String,
    minlength: 2,
    maxlength: 50
  },

  acceptToActInLowRank: {
    type: Boolean
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
  contactTelephone: contactTelephoneSchema,
  permanentAddress: {
    type: String
  },
  NextOfKin: NextOfKinSchema,
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
