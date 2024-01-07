import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment8 = {
    id: 8,
    name: 'CSE-RA-01-08 Use of Hand Tools & Power Tools (2022)',
    process: {
        id: 8,
        name: 'Use of Hand Tools & Power Tools',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-08 / Rev 01',
    raMembers: [
        {
            id: 22, 
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 23, 
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 24, 
            name: "Ler Shi Er",
            employeeId: 52,
            isLeader: false,
            signature: signature3,
            designation: []
        },
    ],
    approval: {
        id: 1,
        approverPerson: {
            id: 1,
            name: 'Lee Hock Chye',
            designations: ['Director'],
            signature: signature4
        },
        date: '01/05/2022',
        name: 'Vincent Lee',
    },
    originalAssessmentDate: '02/06/2020',
    lastReviewDate: '01/05/2022',
    nextReviewDate: '30/04/2025',
    raTasks: [
    ],
    workActivities: [
        {
            id: 30,
            name: 'Use of Hand Tools',
            hazards: [
                {
                    id: 77,
                    name: "Sharp objects/Pointed edges",
                    riskEvaluation: {
                        id: 77,
                        possiblePollutionHealthAffection: "Cuts, bruises to working personnel",
                        existingImpactControls: [
                            "Wear the necessary PPE (Hand gloves)"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 77,
                        additionalControls: [
                            "Conduct toolbox meeting regularly/Training on proper use of PPE"
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
                    id: 78,
                    name: "Tools fall from height by mishandling",
                    riskEvaluation: {
                        id: 78,
                        possiblePollutionHealthAffection: "Bruises/contusions to foot",
                        existingImpactControls: [
                            "Wear safety shoe & safety helmet"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 78,
                        additionalControls: [
                            "Conduct toolbox meeting regularly/Training on proper use of PPE"
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
                    id: 79,
                    name: "Continuous, repetition work",
                    riskEvaluation: {
                        id: 79,
                        possiblePollutionHealthAffection: "Fatigue to the worker",
                        existingImpactControls: [
                            "Work with a group of people, provision of sufficient rest/shift management"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 79,
                        additionalControls: [
                            "Regular review of existing risk control measures"
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

            ]
        },
        {
            id: 31,
            name: 'Operation & Maintenance of Powered Tools',
            hazards: [
                {
                    id: 80,
                    name: "Generation of Noise",
                    riskEvaluation: {
                        id: 80,
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
                        id: 80,
                        additionalControls: [
                            "Regular toolbox meeting & discussed on the importance of hearing protection."
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
                    id: 81,
                    name: "Not insulated/Exposed wires",
                    riskEvaluation: {
                        id: 81,
                        possiblePollutionHealthAffection: "Electrocution, Electric shock",
                        existingImpactControls: [
                            "Disconnect battery/connection before working on the electrical system.",
                            "Wear proper PPE while working on the electrical system."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 81,
                        additionalControls: [
                            "Regular toolbox meeting conducted & discussed on electrical safety. Provision of RCCB",
                            "Replacement of electric drilling machine with a battery-operated drilling machine if needed"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                id: 82,
                    name: "Tools or object fall from height by mishandling",
                    riskEvaluation: {
                        id: 82,
                        possiblePollutionHealthAffection: "Bruises/contusions to foot",
                        existingImpactControls: [
                            "Proper PPE should be provided."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 82,
                        additionalControls: [
                            "Regular review of existing risk control measures."
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
                    id: 83,
                    name: "Overheating of appliances leading to fire",
                    riskEvaluation: {
                        id: 83,
                        possiblePollutionHealthAffection: "Fatal injury to workers",
                        existingImpactControls: [
                            "All electrical cords, tools, and appliances are kept away from heat, water, and oil.",
                            "Do not clean electrical equipment with flammable solvents."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 83,
                        additionalControls: [
                            "Emergency response plan for fire situations established",
                            "Employees trained on fire safety and handling fire emergency situations"
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
                    id: 84,
                    name: "Heat stress",
                    riskEvaluation: {
                        id: 84,
                        possiblePollutionHealthAffection: "Dehydration/ill health to worker/heat stroke/possibly fatal",
                        existingImpactControls: [
                            "Provision of sufficient rest.",
                            "Encourage worker to drink more water.",
                            "Wear hand gloves."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 84,
                        additionalControls: [
                            "Regular review of existing risk control measures."
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
                    id: 85,
                    name: "Generation of dust",
                    riskEvaluation: {
                        id: 85,
                        possiblePollutionHealthAffection: "Breathing difficulties",
                        existingImpactControls: [
                            "Proper protective equipment provided."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 3,
                            irpn: 9
                        }
                    },
                    riskControl: {
                        id: 85,
                        additionalControls: [
                            "Training provided on Importance of PPE."
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
                    id: 86,
                    name: "Generation of noise",
                    riskEvaluation: {
                        id: 86,
                        possiblePollutionHealthAffection: "Noise-induced deafness",
                        existingImpactControls: [
                            "Wear Earplug or Ear Muff"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 86,
                        additionalControls: [
                            "Regular toolbox meeting & discussion on the importance of hearing protection."
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
                    id: 87,
                    name: "Flying particles",
                    riskEvaluation: {
                        id: 87,
                        possiblePollutionHealthAffection: "Cuts/bruise to face and eyes",
                        existingImpactControls: [
                            "Wear safety glasses."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 87,
                        additionalControls: [
                            "Provision of safe guard to protect the flying particles."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 88,
                    name: "Continuous work",
                    riskEvaluation: {
                        id: 88,
                        possiblePollutionHealthAffection: "Fatigue to the worker",
                        existingImpactControls: [
                            "Work with a group of people.",
                            "Provision of sufficient rest/shift management."
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 88,
                        additionalControls: [
                            "Regular review of existing risk control measures."
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
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