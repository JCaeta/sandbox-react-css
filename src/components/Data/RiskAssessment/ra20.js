import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment20 = {
    id: 20,
    name: 'CSE-RA-01-14 Confined Space Access (2022)',
    process: {
        id: 20,
        name: 'Confined Space Access',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-14 / Rev 01',
    raMembers: [
        {
            id: 58,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 59,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 60,
            name: 'Ler Shi Er',
            isLeader: false,
            signature: signature3,
            designations: [],
        },
    ],
    approval: {
        id: 1,
        approverPerson: {
            id: 1,
            name: 'Lee Hock Chye',
            designations: ['Director'],
            signature: signature4,
        },
        date: '01/05/2022',
        name: 'Vicent Lee',
    },
    originalAssessmentDate: '02/06/2020',
    lastReviewDate: '01/05/2022',
    nextReviewDate: '30/04/2025',
    raTasks: [],
    workActivities: [
        {
            id: -1,
            name: 'Working in confined space',
            hazards: [
                {
                    id: 183,
                    name: "Falling from height",
                    riskEvaluation: {
                        id: 183,
                        possiblePollutionHealthAffection: "Fractures / Serious bodily injury / possibly fatal",
                        existingImpactControls: [
                            "Wear non-slip safety shoes"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 183,
                        additionalControls: [
                            "Must be physically healthy"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 184,
                    name: "No natural or poor lighting",
                    riskEvaluation: {
                        id: 184,
                        possiblePollutionHealthAffection: "Trip and fall causing sprains / bruises",
                        existingImpactControls: [
                            "Carry portable lighting",
                            "PPE"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 184,
                        additionalControls: [
                            "Care with walking"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 185,
                    name: "Failure of lighting appliances",
                    riskEvaluation: {
                        id: 185,
                        possiblePollutionHealthAffection: "Bump into objects causing cuts / lacerations / bruises",
                        existingImpactControls: [
                            "Check lighting appliances first"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 185,
                        additionalControls: [
                            "Carry spare torchlight",
                            "To bring proper communication equipment"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 186,
                    name: "Inhalation of unknown toxic gas",
                    riskEvaluation: {
                        id: 186,
                        possiblePollutionHealthAffection: "Ill health/ worker collapse/ possible fatal",
                        existingImpactControls: [
                            "Provide adequate ventilation/exhaust ventilation",
                            "Check condition of atmosphere inside confined space",
                            "To bring portable gas detectors"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 186,
                        additionalControls: [
                            "Carry emergency escape breathing apparatus",
                            "Standby watchman outside confined space",
                            "Continuous gas monitoring of gas content"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 187,
                    name: "Inhalation of unknown toxic gas",
                    riskEvaluation: {
                        id: 187,
                        possiblePollutionHealthAffection: "Eye irritation due to vapor/gas/welding fume",
                        existingImpactControls: [
                            "Provide adequate ventilation/exhaust ventilation"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 187,
                        additionalControls: [
                            "PPE"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },    
                {
                    id: 188,
                    name: "Poor ventilation leading to oxygen deficiency",
                    riskEvaluation: {
                        id: 188,
                        possiblePollutionHealthAffection: "Possible asphyxiation / fatal",
                        existingImpactControls: [
                            "Check condition of atmosphere inside tank",
                            "Apply forced ventilation"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 188,
                        additionalControls: [
                            "Standby watchman outside confined space"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 189,
                    name: "Falling ill suddenly while working",
                    riskEvaluation: {
                        id: 189,
                        possiblePollutionHealthAffection: "Unable to exit confined space safely leading to deterioration of ill-health / possible fatal",
                        existingImpactControls: [
                            "Use rescue gears to retrieve sick people",
                            "Buddy system",
                            "Provide adequate ventilation/exhaust ventilation"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 189,
                        additionalControls: [
                            "Person entering must be physically healthy",
                            "Standby watchman outside confined space"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Doing hot work inside any confined space',
            hazards: [
                {
                    id: 190,
                    name: "Accumulation of explosive gas mixture due to leaking cutting hoses/torches left inside",
                    riskEvaluation: {
                        id: 190,
                        possiblePollutionHealthAffection: "Potential for serious explosion",
                        existingImpactControls: [
                            "Wear appropriate PPE",
                            "Remove gas regulators when going for breaks"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 190,
                        additionalControls: [
                            "Thorough cleaning of the tank",
                            "Toolbox safety meeting"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 191,
                    name: "Electric shock when made contact with holder/cable",
                    riskEvaluation: {
                        id: 191,
                        possiblePollutionHealthAffection: "Electrocution / possibly fatal",
                        existingImpactControls: [
                            "Check condition of electrode holder/cablings",
                            "Wear dry clothes"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 191,
                        additionalControls: [
                            "Never stop ventilation",
                            "PPE"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 192,
                    name: "Sparks generated Fire / explosion in the presence of flammable vapors",
                    riskEvaluation: {
                        id: 192,
                        possiblePollutionHealthAffection: "Serious property damage / bodily injury / possible fatal",
                        existingImpactControls: [
                            "Thorough cleaning of space",
                            "Remove all combustible materials"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 192,
                        additionalControls: [
                            "Fire extinguisher must be present at the site",
                            "Proper housekeeping",
                            "Standby fire watchman inside confined space"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        }
    ]
}