import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment13 = {
    id: 13,
    name: "CSE-RA-01-13 Painting Works (2022) - Table Model",
    process: {
      id: 13,
      name: "Painting Works",
      location: "Workplace"
    },
    referenceNumber: "CSE-RA-01-13 / Rev 01",
    raMembers: [
        {
            id: 37,
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designations: ['Manager']
        },
        {
            id: 38,
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 39,
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
            id: 40,
            name: 'Prepare Materials & Tools',
            hazards: [
                {
                    id: 115,
                    name: "Sharp objects",
                    riskEvaluation: {
                        id: 115,
                        possiblePollutionHealthAffection: "Cuts / lacerations",
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
                        id: 115,
                        additionalControls: [
                            "Regularly communicate the risk in toolbox meeting / deploy trained personnel to conduct the work"
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
                    id: 116,
                    name: "Tools fall from height by miss-handling",
                    riskEvaluation: {
                        id: 116,
                        possiblePollutionHealthAffection: "Contusions / bruises",
                        existingImpactControls: [
                            "Wear hand gloves/ safety shoes"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 116,
                        additionalControls: [
                            "Regularly communicate the risk in toolbox meeting / deploy trained personnel to conduct the work"
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
            id: 41,
            name: 'Mixing Paints & Chemicals',
            hazards: [
                {
                    id: 117,
                    name: "Smells from paints",
                    riskEvaluation: {
                        id: 117,
                        possiblePollutionHealthAffection: "Ill health / Breathing / respiratory problem",
                        existingImpactControls: [
                            "Wear mask / work in open environment"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 117,
                        additionalControls: [
                            "Provision of mechanical ventilation"
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
                    id: 118,
                    name: "Contact with paints",
                    riskEvaluation: {
                        id: 118,
                        possiblePollutionHealthAffection: "Eye/skin irritation",
                        existingImpactControls: [
                            "Wear safety goggles and gloves"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 118,
                        additionalControls: [
                            "Routine check by site supervisor"
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
                    id: 119,
                    name: "Fire hazards from the paints",
                    riskEvaluation: {
                        id: 119,
                        possiblePollutionHealthAffection: "Burns, fatality to workers due to exposure to fire",
                        existingImpactControls: [
                            "Paints should be isolated from flame cutting & welding works",
                            "Smoking is prohibited in storage/working areas.",
                            "Suitable & sufficient fire extinguishers should be placed at the storage/working areas"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 119,
                        additionalControls: [
                            "Provide proper mechanical ventilation to the workplace if necessary"
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
            id: 42,
            name: 'Painting (Roller)',
            hazards: [
                {
                    id: 120,
                    name: "Inhalation of Paint Vapours",
                    riskEvaluation: {
                        id: 120,
                        possiblePollutionHealthAffection: "Ill health / Breathing / respiratory problem",
                        existingImpactControls: [
                            "Wear air purifying type respirator",
                            "Work in open environment"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 3,
                            irpn: 9
                        }
                    },
                    riskControl: {
                        id: 120,
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
                    id: 121,
                    name: "Skin / Eye Contact with paints",
                    riskEvaluation: {
                        id: 121,
                        possiblePollutionHealthAffection: "Eye/Skin irritation",
                        existingImpactControls: [
                            "Wear Safety goggles and gloves"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 3,
                            irpn: 9
                        }
                    },
                    riskControl: {
                        id: 121,
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
                    id: 122,
                    name: "Fire hazards from the paints",
                    riskEvaluation: {
                        id: 122,
                        possiblePollutionHealthAffection: "Burns, fatality to workers due to exposure to fire",
                        existingImpactControls: [
                            "Paints should be isolated from flame cutting & welding works",
                            "Smoking is prohibited in storage/working areas.",
                            "Suitable & sufficient fire extinguishers should be placed at the storage/working areas"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 122,
                        additionalControls: [
                            "Provision of drip tray as secondary containment to contain any paint spill / leak from containers",
                            "Provide proper mechanical ventilation to the workplace if necessary"
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
                    id: 123,
                    name: "Fall from height",
                    riskEvaluation: {
                        id: 123,
                        possiblePollutionHealthAffection: "Serious Injury/ fatal injury to worker or person under the ladder area",
                        existingImpactControls: [
                            "All workers were briefed on SWP for use of ladder",
                            "Workers must be medically fit when working on height.",
                            "Provision of Proper PPE",
                            "Teammate to support ladder at ground level"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 123,
                        additionalControls: [
                            "Regular enforcement on safety rules and regulations among workers"
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
            id: 43,
            name: 'Spray Painting',
            hazards: [
                {
                    id: 124,
                    name: "Improper working posture",
                    riskEvaluation: {
                        id: 124,
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
                        id: 124,
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
                    id: 125,
                    name: "Hose burst, paint pumped out and hit the painter with high pressure",
                    riskEvaluation: {
                        id: 125,
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
                        id: 125,
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
                    id: 126,
                    name: "Inhalation of paint toxic fumes, chemicals, and volatile organic compounds",
                    riskEvaluation: {
                        id: 126,
                        possiblePollutionHealthAffection: "Headaches, Asthma, Respiratory illness, Lung cancer",
                        existingImpactControls: [
                            "Use air face mask and respirator",
                            "Wear hand gloves for body & skin protection",
                            "Sufficient ventilation at the painting area & explosion-proof lighting"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 126,
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
                    id: 127,
                    name: "Absence of labels, warning sign, and MSDS (Material Safety Data Sheet)",
                    riskEvaluation: {
                        id: 127,
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
                        id: 127,
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
                    id: 128,
                    name: "Contact with naked flame, heat source, and smoking",
                    riskEvaluation: {
                        id: 128,
                        possiblePollutionHealthAffection: "Burns to workers and damage to property due to the outbreak of fire",
                        existingImpactControls: [
                            "Smoking is prohibited in storage/working areas",
                            "Suitable & sufficient fire extinguishers should be placed at the storage/working areas"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 128,
                        additionalControls: [
                            "Provide proper mechanical ventilation to the workplace if necessary."
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
                    id: 129,
                    name: "High noise level",
                    riskEvaluation: {
                        id: 129,
                        possiblePollutionHealthAffection: "Noise-induced deafness",
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
                        id: 129,
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
                    id: 130,
                    name: "Contact with paint",
                    riskEvaluation: {
                        id: 130,
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
                        id: 130,
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
            id: 44,
            name: 'Sanding',
            hazards: [
                {
                    id: 131,
                    name: "Dust, flying particles",
                    riskEvaluation: {
                        id: 131,
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
                        id: 131,
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
        },
    ]
}