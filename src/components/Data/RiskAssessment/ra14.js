import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment14 = {
    id: 14,
    name: "CSE-RA-01-12 Hot Works (2022)",
    process: {
      id: 14,
      name: "Hot works",
      location: "Workplace"
    },
    referenceNumber: "CSE-RA-01-12 /Rev 01",
    raMembers: [
        {
            id: 40,
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 41,
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 42,
            name: "Ler Shi Er",
            employeeId: 52,
            isLeader: false,
            signature: signature3,
            designation: []
        }
    ],
    approval: {
        id: 1,
        approverPerson: {
            id: 1,
            name: 'Lee Hock Chye',
            designations: ['Director'],
            signature: signature4
        },
        date: "01/05/2022",
        name: "Lee Hock Chye"
    },
    originalAssessmentDate: "02/06/2020",
    lastReviewDate: "01/05/2022",
    nextReviewDate: "30/04/2025",
    raTasks: [
    ],
    workActivities: [
        {
            id: 45,
            name: 'Welding Operation',
            hazards: [
                {
                    id: 132,
                    name: "Live electrical cable",
                    riskEvaluation: {
                        id: 132,
                        possiblePollutionHealthAffection: "Electric shock to personnel / possibly fatal",
                        existingImpactControls: [
                            "Appoint qualified personnel, provision of training before commencing the work, refer to SWP"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 132,
                        additionalControls: [
                            "Measures made for workers to report worn out and damaged wires, which will be immediately replaced",
                            "Proper maintenance"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 133,
                    name: "Radiation",
                    riskEvaluation: {
                        id: 133,
                        possiblePollutionHealthAffection: "Burns",
                        existingImpactControls: [
                            "Welding screen or welding helmet with a glass visor is to be provided",
                            "Welding overalls or some other protective clothing with a leather apron to be provided"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 133,
                        additionalControls: [
                            "Close supervision"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 134,
                    name: "Thermal radiation",
                    riskEvaluation: {
                        id: 134,
                        possiblePollutionHealthAffection: "Asphyxiation",
                        existingImpactControls: [
                            "Always ensure that the workplace is well-ventilated",
                            "Welders should not be obliged to adopt uncomfortable working positions or use heavy equipment",
                            "Suitable protective equipment, such as heat-insulated gloves, should always be used",
                            "Ensure the welder’s back is not exposed to the cold and to draughts while the front of the body is exposed to very high temperature"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 134,
                        additionalControls: [
                            "Close supervision"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 135,
                    name: "Fire Accident – due to spark",
                    riskEvaluation: {
                        id: 135,
                        possiblePollutionHealthAffection: "Fatal injury",
                        existingImpactControls: [
                            "Toolbox meeting conducted regularly & discussed on fire prevention / Fire extinguisher provision",
                            "Ensure effective training is provided to the welders",
                            "Cleaning and removal of flammable materials in the risk zone",
                            "Make sure sufficient firefighting equipment is available"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 135,
                        additionalControls: [
                            "Fire watchman always on standby",
                            "Make sure that the staff are sufficiently familiar with the regulations and the ways risks can be avoided"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 136,
                    name: "Flying Particles",
                    riskEvaluation: {
                        id: 136,
                        possiblePollutionHealthAffection: "Cuts / lacerations to face and eyes",
                        existingImpactControls: [
                            "Wear face shield with sufficient glass shades for the job"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 136,
                        additionalControls: [
                            "Enforced to use proper PPE by supervisor",
                            "Need to provide training on the importance of PPE"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 137,
                    name: "Poor condition cable, electrode holder",
                    riskEvaluation: {
                        id: 137,
                        possiblePollutionHealthAffection: "Electrocution / shock / possibly fatal",
                        existingImpactControls: [
                            "Weld cable, electrode holder must be in good condition"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 137,
                        additionalControls: [
                            "Regular inspection of all electrical equipment"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 138,
                    name: "Fumes generation",
                    riskEvaluation: {
                        id: 138,
                        possiblePollutionHealthAffection: "Breathing / respiratory problem",
                        existingImpactControls: [
                            "Provision of the mask"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 138,
                        additionalControls: [
                            "Provide ventilation"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 139,
                    name: "Heat Stress",
                    riskEvaluation: {
                        id: 139,
                        possiblePollutionHealthAffection: "Dehydration / ill health to worker / heat stroke / possibly fatal",
                        existingImpactControls: [
                            "Provision of sufficient rest",
                            "Encourage workers to drink more water",
                            "Wear hand gloves"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 139,
                        additionalControls: [
                            "Close supervision"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 140,
                    name: "Generation of Noise",
                    riskEvaluation: {
                        id: 140,
                        possiblePollutionHealthAffection: "Noise-induced deafness",
                        existingImpactControls: [
                            "Worker must wear the ear plug"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 140,
                        additionalControls: [
                            "Regular toolbox meeting & discussed on the importance of hearing protection"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                },
                {
                    id: 141,
                    name: "Continuous work",
                    riskEvaluation: {
                        id: 141,
                        possiblePollutionHealthAffection: "Fatigue to the worker",
                        existingImpactControls: [
                            "Work with a group of people",
                            "Provision of sufficient rest / shift management"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 141,
                        additionalControls: [
                            "Close supervision"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "30.09.2020",
                        remarks: ""
                    }
                }                
            ]
        }
    ]
}