import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment3 = {
    id: 3,
    name: 'CSE-RA-01-04 Pulling, Running and Laying of Cable (2022)',
    process: {
        id: 3,
        name: "Pulling, Running and Laying of Cable",
        location: "Workplace"
    },
    referenceNumber: "CSE-RA-01-04 /Rev 02",
    raMembers: [
        {
            id: 7,
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 8,
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 9,
            name: "Ler Shi Er",
            employeeId: 52,
            isLeader: false,
            signature: signature3,
            designation: []
        },
    ],
    approval: {
        id: 3,
        approverPerson: {
            id: 1,
            name: 'Lee Hock Chye',
            designations: ['Director'],
            signature: signature4
        },
        name: "Vicent Lee",
        date: "01/05/2022"
    },
    originalAssessmentDate: "02/06/2020",
    lastReviewDate: "01/05/2022",
    nextReviewDate: "30/04/2025",
    raTasks: [
    ],
    workActivities: [
        {
            id: 12,
            name: '',
            hazards: [
                {
                    id: 24,
                    name: "Working at height using 'A' frame ladder or scaffolding - falling from height",
                    riskEvaluation: {
                        id: 24,
                        possiblePollutionHealthAffection: "Fatal accident / serious injury / possibly fatal to Site employees",
                        existingImpactControls: [
                            "Provide proper PPE for worker working at height and secure on proper anchorage point.",
                            "Provide proper working access such as scaffolding platform or workbench to carry out the work.",
                            "While working on 'A' frame ladder, ensure someone is supporting the 'A' frame ladder to prevent it from toppling to the ground."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 24,
                        additionalControls: [
                            "Close supervision by foreman during working at height is in process."
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
                    id: 25,
                    name: "Sharp/pointed ends of cable",
                    riskEvaluation: {
                        id: 25,
                        possiblePollutionHealthAffection: "Cuts to workers",
                        existingImpactControls: [
                            "Use of PPE appropriate for the task, leather gloves, and safety shoes",
                            "Provide temporary cover on sharp points as practicable"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 25,
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
                    id: 26,
                    name: "Handling of heavy, bulky cables",
                    riskEvaluation: {
                        id: 26,
                        possiblePollutionHealthAffection: "Musculoskeletal injuries, backaches\nHands/fingers caught between cables.",
                        existingImpactControls: [
                            "Employ mechanical means if necessary (e.g., use of lever lashing puller, etc.).",
                            "Worker to work in a team.",
                            "Exercise good teamwork to synchronize cable pulling."
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 26,
                        additionalControls: [
                            "Good communication between workers when working in a group."
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
                    id: 27,
                    name: "Cable drum drop or roll off from position",
                    riskEvaluation: {
                        id: 27,
                        possiblePollutionHealthAffection: "Hand/leg injuries to worker causing contusions",
                        existingImpactControls: [
                            "Ensure proper cable stand used",
                            "Proper PPE (gloves, safety shoes) used."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 27,
                        additionalControls: [
                            "Regular review of existing control measures"
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
                    id: 28,
                    name: "Exposure to live currents",
                    riskEvaluation: {
                        id: 28,
                        possiblePollutionHealthAffection: "Electrocution/ Electric shock",
                        existingImpactControls: [
                            "All electrical tools to be checked that there are no exposed parts."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 28,
                        additionalControls: [
                            "Wires to be protected by RCCB within 3m length of wire from the point of use."
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
                    id: 29,
                    name: "Trip and fall on the cables",
                    riskEvaluation: {
                        id: 29,
                        possiblePollutionHealthAffection: "Injury to worker or passer-by causing sprains / abrasions",
                        existingImpactControls: [
                            "Fabricate barrier around job to limit only authorized personnel allowed at job site",
                            "Proper housekeeping",
                            "Wear PPE"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 29,
                        additionalControls: [
                            "No running at the job site",
                            "Remove any unused cable on the floor"
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
                    id: 30,
                    name: "Continuous cable pulling",
                    riskEvaluation: {
                        id: 30,
                        possiblePollutionHealthAffection: "Workers tired and exhausted, Losing concentration on the job leading to carelessness (mental well-being)",
                        existingImpactControls: [
                            "Workers to work in rotating teams",
                            "Replace worker if not fit for the task or unwell",
                            "Allow workers to have breaks in between"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 30,
                        additionalControls: [
                            "Regular review of existing control measures"
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
                    id: 31,
                    name: "Electric shock due to damaged/exposed wires",
                    riskEvaluation: {
                        id: 31,
                        possiblePollutionHealthAffection: "Electrocution/electric shock to the working personnel",
                        existingImpactControls: [
                            "To maintain all electric cables in good condition and free from defects",
                            "Employees to report any damaged/worn-out wires"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 31,
                        additionalControls: [
                            "Wires to be protected by RCCB within 3m length of wire from point of use",
                            "Check on cable before use"
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
                }
            ]
        },
        {
            id: 13,
            name: 'Cutting of cable using portable cutter',
            hazards: [
                {
                    id: 32,
                    name: "Contact with sharp blade",
                    riskEvaluation: {
                        id: 32,
                        possiblePollutionHealthAffection: "Cut, laceration on limbs, fingers",
                        existingImpactControls: [
                            "Worker to wear hand gloves"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 32,
                        additionalControls: [
                            "Regular inspection of cutting tools",
                            "Ensure work area is well-lit up"
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
                }                
            ]
        }
    ]
}
