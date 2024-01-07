import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment12 = {
    id: 12,
    name: 'CSE-RA-01-13 Painting Works (2022)',
    process: {
        id: 12,
        name: 'Painting Works',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-01-13 / Rev 01',
    raMembers: [
        {
            id: 34, 
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 35, 
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 36, 
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
            id: 36,
            name: 'Prepare Materials & Tools',
            hazards: [
                {
                    id: 98,
                    name: "Sharp objects",
                    riskEvaluation: {
                        id: 98,
                        possiblePollutionHealthAffection: "Cuts/lacerations",
                        existingImpactControls: [
                            "Wear the necessary PPE (Hand gloves)."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 98,
                        additionalControls: [
                            "Regularly communicate the risk in toolbox meeting/deploy trained personnel to conduct the work."
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
                    id: 99,
                    name: "Tools fall from height by mishandling",
                    riskEvaluation: {
                        id: 99,
                        possiblePollutionHealthAffection: "Contusions/bruises",
                        existingImpactControls: [
                            "Wear hand gloves/safety shoes."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 99,
                        additionalControls: [
                            "Regularly communicate the risk in toolbox meeting/deploy trained personnel to conduct the work."
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
                }
            ]
        },
        {
            id: 37,
            name: 'Mixing Paints & Chemicals',
            hazards: [
                {
                    id: 100,
                    name: "Smells from paints",
                    riskEvaluation: {
                        id: 100,
                        possiblePollutionHealthAffection: "Ill health/Breathing/respiratory problem",
                        existingImpactControls: [
                            "Wear mask/work in an open environment."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 100,
                        additionalControls: [
                            "Provision of mechanical ventilation."
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
                    id: 101,
                    name: "Contact with paints",
                    riskEvaluation: {
                        id: 101,
                        possiblePollutionHealthAffection: "Eye/skin irritation",
                        existingImpactControls: [
                            "Wear safety goggles and gloves."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 101,
                        additionalControls: [
                            "Routine check by site supervisor."
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
                    id: 102,
                    name: "Fire hazards from the paints",
                    riskEvaluation: {
                        id: 102,
                        possiblePollutionHealthAffection: "Burns, fatality to workers due to exposure to fire",
                        existingImpactControls: [
                            "Paints should be isolated from flame cutting & welding works.",
                            "Smoking is prohibited in storage/working areas.",
                            "Suitable & sufficient fire extinguishers should be placed at the storage/working areas."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 102,
                        additionalControls: [
                            "Provide proper mechanical ventilation to the workplace if necessary."
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
                }                
            ]
        },
        {
            id: 38,
            name: 'Painting (Roller)',
            hazards: [
                {
                    id: 103,
                    name: "Inhalation of Paint Vapours",
                    riskEvaluation: {
                        id: 103,
                        possiblePollutionHealthAffection: "Ill health/Breathing/respiratory problem",
                        existingImpactControls: [
                            "Wear air-purifying type respirator.",
                            "Work in an open environment."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 3,
                            irpn: 9
                        }
                    },
                    riskControl: {
                        id: 103,
                        additionalControls: [
                            "Regular reminder on SWP during safety briefing.",
                            "Regular enforcement on safety rules and regulations among workers."
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
                    id: 104,
                    name: "Skin/Eye Contact with paints",
                    riskEvaluation: {
                        id: 104,
                        possiblePollutionHealthAffection: "Eye/Skin irritation",
                        existingImpactControls: [
                            "Wear Safety goggles and gloves."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 3,
                            irpn: 9
                        }
                    },
                    riskControl: {
                        id: 104,
                        additionalControls: [
                            "Regular reminder on SWP during safety briefing.",
                            "Regular enforcement on safety rules and regulations among workers."
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
                    id: 105,
                    name: "Fire hazards from the paints",
                    riskEvaluation: {
                        id: 105,
                        possiblePollutionHealthAffection: "Burns, fatality to workers due to exposure to fire",
                        existingImpactControls: [
                            "Paints should be isolated from flame cutting & welding works.",
                            "Smoking is prohibited in storage/working areas.",
                            "Suitable & sufficient fire extinguishers should be placed at the storage/working areas."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 105,
                        additionalControls: [
                            "Provision of drip tray as secondary containment to contain any paint spill/leak from containers.",
                            "Provide proper mechanical ventilation to the workplace if necessary."
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
                    id: 106,
                    name: "Fall from height",
                    riskEvaluation: {
                        id: 106,
                        possiblePollutionHealthAffection: "Serious Injury/ fatal injury to worker or person under the ladder area",
                        existingImpactControls: [
                            "All workers were briefed on SWP for use of ladder.",
                            "Workers must be medically fit when working on height.",
                            "Provision of Proper PPE.",
                            "Teammate to support ladder at ground level."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 106,
                        additionalControls: [
                            "Regular enforcement on safety rules and regulations among workers."
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
                    id: 107,
                    name: "Improper working posture",
                    riskEvaluation: {
                        id: 107,
                        possiblePollutionHealthAffection: "Repetitive strain injury (RSI)",
                        existingImpactControls: [
                            "All workers were briefed on proper working postures to be observed"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 107,
                        additionalControls: [
                            "Regular inspection of work areas to observe work practices"
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
                    id: 108,
                    name: "Hose burst, paint pumped out and hit the painter with high pressure",
                    riskEvaluation: {
                        id: 108,
                        possiblePollutionHealthAffection: "Cuts / lacerations / bruises",
                        existingImpactControls: [
                            "Control air supply pressure not to exceed the hose limit"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 108,
                        additionalControls: [
                            "Painting hose must be cleaned throughout after spray painting work completed"
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
                    id: 109,
                    name: "Inhalation of paint toxic fumes, chemicals and volatile organic compounds",
                    riskEvaluation: {
                        id: 109,
                        possiblePollutionHealthAffection: "Headaches, Asthma, Respiratory illness, Lung cancer",
                        existingImpactControls: [
                            "Use air face mask and respirator",
                            "Wear hand gloves for body & skin protection",
                            "Sufficient ventilation at painting area & explosion-proof lighting"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 109,
                        additionalControls: [
                            "Take frequent breaks in the fresh air"
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
                    id: 110,
                    name: "Absence of labels, warning sign and MSDS (Material Safety Data Sheet)",
                    riskEvaluation: {
                        id: 110,
                        possiblePollutionHealthAffection: "Adverse health effect and damage to property due to mishandling of solvent",
                        existingImpactControls: [
                            "MSDS available",
                            "Put up warning signs"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 110,
                        additionalControls: [
                            "Regular reminder on SWP during safety briefing",
                            "Regular enforcement on safety rules and regulations among workers"
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
                    id: 111,
                    name: "Contact with naked flame, heat source and smoking",
                    riskEvaluation: {
                        id: 111,
                        possiblePollutionHealthAffection: "Burns to workers and damage to property due to outbreak of fire",
                        existingImpactControls: [
                            "Smoking is prohibited in Storage/working areas",
                            "Suitable & sufficient fire extinguishers should be placed at the storage/working areas"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 111,
                        additionalControls: [
                            "Provide proper mechanical ventilation to the work place if necessary."
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
                    id: 112,
                    name: "High noise level",
                    riskEvaluation: {
                        id: 112,
                        possiblePollutionHealthAffection: "Noise induced deafness",
                        existingImpactControls: [
                            "Personal protective equipment (e.g. ear mufflers / plug)"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 112,
                        additionalControls: [
                            "Regular reminder on SWP during safety briefing",
                            "Regular enforcement on safety rules and regulations among workers"
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
                id: 113,
                    name: "Contact with paint",
                    riskEvaluation: {
                        id: 113,
                        possiblePollutionHealthAffection: "Irritation to skin",
                        existingImpactControls: [
                            "Barricade the affected area and display 'Wet Paint’ Sign"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 113,
                        additionalControls: [
                            "Regular reminder on SWP during safety briefing",
                            "Regular enforcement on safety rules and regulations among workers"
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
                }                
            ]
        },
        {
            id: 39,
            name: 'Sanding',
            hazards: [
                {
                    id: 114,
                    name: "Dust, flying particles",
                    riskEvaluation: {
                        id: 114,
                        possiblePollutionHealthAffection: "Ill health due to inhalation of dust or eye injury due to dust flying into eyes",
                        existingImpactControls: [
                            "Wear mask and safety glasses",
                            "Supervisor to enforce PPE usage",
                            "Clear dust regularly"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 114,
                        additionalControls: [
                            "Regular inspection of work areas",
                            "Regular enforcement on safety rules and regulations among workers"
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
                }
            ]
        }
    ]
}
