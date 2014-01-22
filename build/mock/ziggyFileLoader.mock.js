var ziggyFileLoader = {

    loadAppData: function (str) {
        if (str.indexOf('form_definition') != -1) {
            return JSON.stringify({
                "form_data_definition_version": "1",
                "form": {
                    "bind_type": "eligible_couple",
                    "default_bind_path": "/model/instance/EC_Registration_EngKan/",
                    "fields": [
                        {
                            "name": "id",
                            "shouldLoadValue": true
                        },
                        {
                            "name": "phc",
                            "bind": "/model/instance/EC_Registration_EngKan/phc"
                        },
                        {
                            "name": "subCenter",
                            "bind": "/model/instance/EC_Registration_EngKan/sub_center"
                        },
                        {
                            "name": "village",
                            "bind": "/model/instance/EC_Registration_EngKan/village"
                        },
                        {
                            "name": "householdNumber",
                            "bind": "/model/instance/EC_Registration_EngKan/hh_number"
                        },
                        {
                            "name": "householdAddress",
                            "bind": "/model/instance/EC_Registration_EngKan/hh_address"
                        },
                        {
                            "name": "headOfHousehold",
                            "bind": "/model/instance/EC_Registration_EngKan/hh_head"
                        },
                        {
                            "name": "ecNumber",
                            "bind": "/model/instance/EC_Registration_EngKan/ec_number"
                        },
                        {
                            "name": "wifeName",
                            "bind": "/model/instance/EC_Registration_EngKan/woman_name"
                        },
                        {
                            "name": "aadharNumber",
                            "bind": "/model/instance/EC_Registration_EngKan/aadhar_number"
                        },
                        {
                            "name": "wifeAge",
                            "bind": "/model/instance/EC_Registration_EngKan/woman_age"
                        },
                        {
                            "name": "husbandAge",
                            "bind": "/model/instance/EC_Registration_EngKan/husband_age"
                        },
                        {
                            "name": "womanDOB",
                            "bind": "/model/instance/EC_Registration_EngKan/woman_date_of_birth"
                        },
                        {
                            "name": "husbandDOB",
                            "bind": "/model/instance/EC_Registration_EngKan/husband_date_of_birth"
                        },
                        {
                            "name": "husbandName",
                            "bind": "/model/instance/EC_Registration_EngKan/husband_name"
                        },
                        {
                            "name": "phoneNumber",
                            "bind": "/model/instance/EC_Registration_EngKan/phone_no"
                        },
                        {
                            "name": "phoneOwner",
                            "bind": "/model/instance/EC_Registration_EngKan/phone_owner"
                        },
                        {
                            "name": "alternatePhoneNumber",
                            "bind": "/model/instance/EC_Registration_EngKan/phone_no2"
                        },
                        {
                            "name": "alternatePhoneOwner",
                            "bind": "/model/instance/EC_Registration_EngKan/phone_owner2"
                        },
                        {
                            "name": "economicStatus",
                            "bind": "/model/instance/EC_Registration_EngKan/economic_status"
                        },
                        {
                            "name": "bplCardNumber",
                            "bind": "/model/instance/EC_Registration_EngKan/bpl_card_number"
                        },
                        {
                            "name": "religion"
                        },
                        {
                            "name": "caste"
                        },
                        {
                            "name": "educationalLevel",
                            "bind": "/model/instance/EC_Registration_EngKan/woman_education_level"
                        },
                        {
                            "name": "numberOfPregnancies",
                            "bind": "/model/instance/EC_Registration_EngKan/num_pregnancies"
                        },
                        {
                            "name": "numberOfLiveBirths",
                            "bind": "/model/instance/EC_Registration_EngKan/num_livebirths"
                        },
                        {
                            "name": "numberOfAbortions",
                            "bind": "/model/instance/EC_Registration_EngKan/num_abortions"
                        },
                        {
                            "name": "numberOfSpontaneousAbortions",
                            "bind": "/model/instance/EC_Registration_EngKan/num_abortions_spontaneous"
                        },
                        {
                            "name": "numberOfInducedAbortions",
                            "bind": "/model/instance/EC_Registration_EngKan/num_abortions_induced"
                        },
                        {
                            "name": "numberOfStillBirths",
                            "bind": "/model/instance/EC_Registration_EngKan/num_stillbirths"
                        },
                        {
                            "name": "numberOfLivingChildren",
                            "bind": "/model/instance/EC_Registration_EngKan/num_livingchildren"
                        },
                        {
                            "name": "numberOfLivingMaleChildren",
                            "bind": "/model/instance/EC_Registration_EngKan/num_livingchildren_male"
                        },
                        {
                            "name": "numberOfLivingFemaleChild",
                            "bind": "/model/instance/EC_Registration_EngKan/num_livingchildren_female"
                        },
                        {
                            "name": "isYoungestChildUnderTwo",
                            "bind": "/model/instance/EC_Registration_EngKan/youngestchild_under2"
                        },
                        {
                            "name": "youngestChildAge",
                            "bind": "/model/instance/EC_Registration_EngKan/youngestchild_age"
                        },
                        {
                            "name": "youngestChildDOB",
                            "bind": "/model/instance/EC_Registration_EngKan/youngestchild_date_of_birth"
                        },
                        {
                            "name": "currentMethod",
                            "bind": "/model/instance/EC_Registration_EngKan/familyplanning_method"
                        },
                        {
                            "name": "iudPlace",
                            "bind": "/model/instance/EC_Registration_EngKan/iud_place"
                        },
                        {
                            "name": "iudPerson",
                            "bind": "/model/instance/EC_Registration_EngKan/iud_person"
                        },
                        {
                            "name": "familyPlanningMethodChangeDate",
                            "bind": "/model/instance/EC_Registration_EngKan/date_familyplanningstart"
                        },
                        {
                            "name": "threeMonthsFromSterilizationDate",
                            "bind": "/model/instance/EC_Registration_EngKan/male_sterilizaton_group/threemonths_from_sterilization_date"
                        },
                        {
                            "name": "numberOfCondomsSupplied",
                            "bind": "/model/instance/EC_Registration_EngKan/num_condoms"
                        },
                        {
                            "name": "numberOfOCPDelivered",
                            "bind": "/model/instance/EC_Registration_EngKan/num_ocp_strips"
                        },
                        {
                            "name": "numberOfCentchromanPillsDelivered",
                            "bind": "/model/instance/EC_Registration_EngKan/num_centchroman_pills"
                        },
                        {
                            "name": "isHighPriority",
                            "bind": "/model/instance/EC_Registration_EngKan/is_high_priority"
                        },
                        {
                            "name": "highPriorityReason",
                            "bind": "/model/instance/EC_Registration_EngKan/high_priority_reason"
                        },
                        {
                            "name": "isOutOfArea",
                            "value": "false"
                        },
                        {
                            "name": "isClosed",
                            "value": "false"
                        },
                        {
                            "name": "submissionDate",
                            "bind": "/model/instance/EC_Registration_EngKan/today"
                        },
                        {
                            "name": "registrationDate",
                            "bind": "/model/instance/EC_Registration_EngKan/today"
                        },
                        {
                            "name": "parity",
                            "bind": "/model/instance/EC_Registration_EngKan/parity"
                        },
                        {
                            "name": "dmpaInjectionDate",
                            "bind": "/model/instance/EC_Registration_EngKan/injectable_date"
                        },
                        {
                            "name": "ocpRefillDate",
                            "bind": "/model/instance/EC_Registration_EngKan/refill_date"
                        },
                        {
                            "name": "husbandAge",
                            "bind": "/model/instance/EC_Registration_EngKan/husband_age"
                        },
                        {
                            "name": "husbandEducationLevel",
                            "bind": "/model/instance/EC_Registration_EngKan/husband_education_level"
                        },
                        {
                            "name": "lmpDate",
                            "bind": "/model/instance/EC_Registration_EngKan/lmp_date"
                        },
                        {
                            "name": "uptResult",
                            "bind": "/model/instance/EC_Registration_EngKan/upt_result"
                        },
                        {
                            "name": "sterilizationDoctorName",
                            "bind": "/model/instance/EC_Registration_EngKan/sterilization_doctor_name"
                        },
                        {
                            "name": "maleSterilizationType",
                            "bind": "/model/instance/EC_Registration_EngKan/male_sterilization_type"
                        },
                        {
                            "name": "femaleSterilizationType",
                            "bind": "/model/instance/EC_Registration_EngKan/female_sterilization_type"
                        }
                    ]
                }
            });
        } else
            return JSON.stringify([
                {
                    "parent": "eligible_couple",
                    "child": "mother",
                    "field": "wife",
                    "kind": "one_to_one",
                    "from": "eligible_couple.id",
                    "to": "mother.ecCaseId"
                },
                {
                    "parent": "mother",
                    "child": "child",
                    "field": "children",
                    "kind": "one_to_many",
                    "from": "mother.id",
                    "to": "child.motherCaseId"
                }
            ]);
    },

    getModel: function () {
        return mockForms[ this.formName ].xml_model;
    },

    goBack: function () {
    }
};