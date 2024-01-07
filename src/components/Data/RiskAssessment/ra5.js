import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment5 = {
    id: 5,
    name: 'CSE-RA-01-02 Installation of Trunking, Conduit Works (2022)',
    process: {
        id: 5,
        name: 'Installation of Trunking/ Conduit Works',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-02 / Rev 01',
    raMembers: [
        {
            id: 13, 
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 14, 
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 15, 
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
            id: 21,
            name: 'Installation of Trunking/ Conduit Works- Handling of Tools',
            hazards: [
                {
                    id: 52,
                    name: "Flying shrapnel/particles",
                    riskEvaluation: {
                        id: 52,
                        possiblePollutionHealthAffection: "Cuts to face/eyes",
                        existingImpactControls: [
                            "Wear safety goggles at all times."
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 52,
                        additionalControls: [
                            "Deploy trained person to conduct the job."
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
                },
                {
                    id: 53,
                    name: "Falling from height",
                    riskEvaluation: {
                        id: 53,
                        possiblePollutionHealthAffection: "Injury/Death",
                        existingImpactControls: [
                            "Install barricades/guardrails",
                            "Anchor safety belt and safety harness onto scaffold/lifeline respectively at all times.",
                            "Provide safe access and work platform"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 53,
                        additionalControls: [
                            "Weekly tool-box meeting and Safety inspection",
                            "Implement CSE-SWP-07 Working at height"
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
                    id: 54,
                    name: "Noise generation",
                    riskEvaluation: {
                        id: 54,
                        possiblePollutionHealthAffection: "Noise-induced deafness",
                        existingImpactControls: [
                            "Wear PPE, earplug at all times"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 54,
                        additionalControls: [
                            "Safety briefing on hearing protection"
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
                },
                {
                    id: 55,
                    name: "Slip due to poor housekeeping",
                    riskEvaluation: {
                        id: 55,
                        possiblePollutionHealthAffection: "Physical injury (sprains/abrasions) to personnel",
                        existingImpactControls: [
                            "Ensure regular housekeeping."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 55,
                        additionalControls: [
                            "Regular review of existing control measures."
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
                    id: 56,
                    name: "Falling object",
                    riskEvaluation: {
                        id: 56,
                        possiblePollutionHealthAffection: "Minor cuts and bruises",
                        existingImpactControls: [
                            "Fully decked work platforms with toe-boards at open sides, regular housekeeping of work platforms."
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 56,
                        additionalControls: [
                            "Weekly Scaffold Inspection and toolbox meeting"
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
        },
        {
            id: 22,
            name: 'Installation of Trunking/ Conduit Works – Operation of Electrical Tools',
            hazards: [
                {
                    id: 57,
                    name: "Electric shock/electrocution",
                    riskEvaluation: {
                        id: 57,
                        possiblePollutionHealthAffection: "Injury/death",
                        existingImpactControls: [
                            "Suspension of electric cables on non-conductive supports.",
                            "Provision & maintenance of socket-outlet-assembly and distribution board that are electrically safe-for-use"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 57,
                        additionalControls: [
                            "To inform the site foreman of any faulty electrical tools that should not be used.",
                            "Checks on electrical tools for good operational condition before using them.",
                            "Implement CSE-SWP-11 Electrical Safety"
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
                    id: 58,
                    name: "Hands/fingers caught in-between",
                    riskEvaluation: {
                        id: 58,
                        possiblePollutionHealthAffection: "Minor cuts and bruises to person(s)",
                        existingImpactControls: [
                            "Wear proper P.P.E (hand glove & safety goggles, etc)."
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 58,
                        additionalControls: [
                            "Regular review of existing control measures."
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
                },
                {
                    id: 59,
                    name: "Inhalation of cement dust/dust generated",
                    riskEvaluation: {
                        id: 59,
                        possiblePollutionHealthAffection: "Respiratory tract irritation/air pollution",
                        existingImpactControls: [
                            "Use of dust mask by plasterer.",
                            "Random inspection by foreman"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 59,
                        additionalControls: [
                            "Regular review of existing control measures."
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
        },
        {
            id: 23,
            name: 'Bending of Conduit pipe',
            hazards: [
                {
                    id: 60,
                    name: "Sharp edges",
                    riskEvaluation: {
                        id: 60,
                        possiblePollutionHealthAffection: "Minor cuts to hand and fingers",
                        existingImpactControls: [
                            "Wear PPE.",
                            "Ensure the pipe is fixed properly"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 60,
                        additionalControls: [
                            "Work in a team, better support to hold the pipe properly"
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
