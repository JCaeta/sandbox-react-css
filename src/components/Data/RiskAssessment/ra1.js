import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment1 = {
    id: 1,
    name: 'CSE-QHSEP-03-F02 EAI-01 Environmental Aspect Impact - General (2022)',
    process: {
        id: 1,
        name: 'Environmental Aspect / Impact - General',
        location: 'Office / Workplace',
    },
    referenceNumber: 'EAI-01',
    raMembers: [
        {
            id: 1,
            name: "Lee Han Pin",
            isLeader: true,
            employeeId: 2,
            signature: signature1,
            designation: ""
        },
        {
            id: 2,
            name: "Chen Kok Leong",
            isLeader: false,
            employeeId: 4,
            signature: signature2,
            designation: ['Project Coordinator']
        },
        {
            id: 3,
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
    originalAssessmentDate: '01/05/2022',
    lastReviewDate: '',
    nextReviewDate: '30/04/2025',
    workActivities: [],
    raTasks: [
        {
            id: 1,
            name: 'Tender',
            workActivities: [
                {
                    id: 1,
                    name: 'Prepare / review tender documents ',
                    hazards: [
                        {
                            id: 1,
                            name: 'Use of paper and toner',
                            riskEvaluation: {
                                id: 1,
                                possiblePollutionHealthAffection: 'Resource depletion',
                                existingImpactControls: [
                                    'Reduce filing and printing by double sided printing, scanning and / or e-submission',
                                    'Drafts to be in soft copies',
                                    'Reuse one-side printed paper'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 1,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 0,
                                    likelihood: 0,
                                    irpn: 0
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 2,
                            name: 'Electricity consumption',
                            riskEvaluation: {
                                id: 2,
                                possiblePollutionHealthAffection: 'Resource depletion',
                                existingImpactControls: [
                                    'Use energy star / green label computing equipment',
                                    'Use energy efficiency tested electrical appliance',
                                    'Use energy-saving lighting (e.g. T5, T8, PLC, LED)'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 2,
                                additionalControls: [
                                    'NIL',
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },                        
                                implementationPerson: 'Admin-in-charge / Site Foreman',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 3,
                            name: 'Improper disposal of toner',
                            riskEvaluation: {
                                id: 3,
                                possiblePollutionHealthAffection: 'Land / air / water pollution',
                                existingImpactControls: [
                                    'Agent to collect empty toner for proper disposal'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 3,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 0,
                                    likelihood: 0,
                                    irpn: 0
                                },                        
                                implementationPerson: 'Admin-in-charge / Site Foreman',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        }
                    ]
                },
                {
                    id: 2,
                    name: 'Attend tender interview',
                    hazards: [
                        {
                            id: 4,
                            name: 'Exhaust fume from use of transport',
                            riskEvaluation: {
                                id: 4,
                                possiblePollutionHealthAffection: 'Resource depletion, harmful exhaust emissions',
                                existingImpactControls: [
                                    'Carpool if more than 1 person attend'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 4,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                    ]
                },
            ]
        },
        {
            id: 2,
            name: 'Procurement',
            workActivities: [
                {
                    id: 3,
                    name:'Appoint supplier / contractor',
                    hazards: [
                        {
                            id: 5,
                            name: 'Supplier / contractor who provide less environmentally-friendly product, use less environmentally-friendly work method / equipment',
                            riskEvaluation: {
                                id: 5,
                                possiblePollutionHealthAffection: 'Resource depletion, land / air / water pollution, harmful exhaust emission',
                                existingImpactControls: [
                                    'Request for greener product (e.g. green label, energy efficiency tested, water efficiency tested) if available',
                                    'Select supplier / contractor with ISO 14001 and / or Green & Gracious Builder certification if possible'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 2,
                                    irpn: 3*2
                                }
                            },
                            riskControl: {
                                id: 5,
                                additionalControls: [
                                    'Enquire about existing product specs (e.g. water based, bio-degradable, low VOC / emission) and / or environmental management practice for those without either certification'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                    ]
                },
                {
                    id: 4,
                    name: 'Tender query / meeting / endorsement',
                    hazards: [
                        {
                            id: 6,
                            name: 'Exhaust fume from use of transport',
                            riskEvaluation: {
                                id: 6,
                                possiblePollutionHealthAffection: 'Resource depletion, harmful exhaust emissions',
                                existingImpactControls: [
                                    'Clarify / confirm through email / phone without meeting up',
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 6,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 7,
                            name: 'Use of paper and toner',
                            riskEvaluation: {
                                id: 7,
                                possiblePollutionHealthAffection: 'Resource depletion',
                                existingImpactControls: [
                                    'Reduce filing and printing by double sided printing, scanning and / or e-submission',
                                    'Drafts to be in soft copies',
                                    'Reuse one-side printed paper'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 7,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 8,
                            name: 'Electricity consumption',
                            riskEvaluation: {
                                id: 8,
                                possiblePollutionHealthAffection: 'Resource depletion',
                                existingImpactControls: [
                                    'Use energy star / green label computing equipment',
                                    'Use energy efficiency tested electrical appliance',
                                    'Use energy-saving lighting (e.g. T5, T8, PLC, LED)',
                                    'Set computing equipment to standby mode after 15 minutes of non-activity'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 8,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 9,
                            name: 'Improper disposal of toner',
                            riskEvaluation: {
                                id: 9,
                                possiblePollutionHealthAffection: 'Land / air / water pollution',
                                existingImpactControls: [
                                    'Agent to collect empty toner for proper disposal'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 9,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                    ]
                },
            ]
        },
        {
            id: 3,
            name: 'Project Management & execution',
            workActivities: [
                {
                    id: 5,
                    name: 'Administration (e.g. submission, meeting, presentation, drawing, filing)',
                    hazards: [
                        {
                            id: 10,
                            name: 'Exhaust fume from use of transport',
                            riskEvaluation: {
                                id: 10,
                                possiblePollutionHealthAffection: 'Resource depletion, harmful exhaust emissions',
                                existingImpactControls: [
                                    'Carpool if more than 1 person attend',
                                    'Clarify / confirm through email / phone without meeting up'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 10,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 11,
                            name: 'Use of paper and toner',
                            riskEvaluation: {
                                id: 11,
                                possiblePollutionHealthAffection: 'Resource depletion',
                                existingImpactControls: [
                                    'Reduce filing printing by double sided printing, scanning and / or e-submission',
                                    'Drafts to be in soft copies',
                                    'Reuse one-side printed paper'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 11,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 12,
                            name: 'Electricity consumption',
                            riskEvaluation: {
                                id: 12,
                                possiblePollutionHealthAffection: 'Resource depletion',
                                existingImpactControls: [
                                    'Use energy star / green label computing equipment',
                                    'Use energy efficiency tested electrical appliance',
                                    'Use energy-saving lighting (e.g. T5, T8, PLC, LED)',
                                    'Set computing equipment to standby mode after 15 minutes of non-activity'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 12,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 13,
                            name: 'Improper disposal of toner',
                            riskEvaluation: {
                                id: 13,
                                possiblePollutionHealthAffection: 'Land / air / water pollution',
                                existingImpactControls: [
                                    'Agent to collect empty toner for proper disposal',
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 13,
                                additionalControls: [
                                    'NIL'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                    ]
                },
                {
                    id: 6,
                    name: 'Mobilization and Site work ',
                    hazards: [
                        {
                            id: 14,
                            name: 'Noise emission',
                            riskEvaluation: {
                                id: 14,
                                possiblePollutionHealthAffection: 'Public health issue / nuisance',
                                existingImpactControls: [
                                    'Provide noise monitoring',
                                    'Proper maintenance of plant / equipment',
                                    'Use quieter type of plant / equipment / work method'
                                ],
                                irpn: {
                                    severity: 4,
                                    likelihood: 2,
                                    irpn: 4*2
                                }
                            },
                            riskControl: {
                                id: 14,
                                additionalControls: [
                                    'Restrict noisier work to weekday daytime',
                                    'Comply with no work rule on Sunday / public holiday'
                                ],
                                irpn: {
                                    severity: 4,
                                    likelihood: 1,
                                    irpn: 4*1
                                },
                                implementationPerson: 'Site Foreman',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 15,
                            name: 'Dust generation',
                            riskEvaluation: {
                                id: 15,
                                possiblePollutionHealthAffection: 'Air pollution',
                                existingImpactControls: [
                                    'Spray water on dusty surface',
                                    'Cover dusty surface / material'
                                ],
                                irpn: {
                                    severity: 0,
                                    likelihood: 0,
                                    irpn: 0
                                }
                            },
                            riskControl: {
                                id: 15,
                                additionalControls: [
                                    'NIL',
                                ],
                                irpn: {
                                    severity: 4,
                                    likelihood: 1,
                                    irpn: 4*1
                                },
                                implementationPerson: 'Site Foreman',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 16,
                            name: 'Soot and oil leak from plant / machinery use',
                            riskEvaluation: {
                                id: 16,
                                possiblePollutionHealthAffection: 'Harmful exhaust emission, land / water pollution',
                                existingImpactControls: [
                                    'Proper maintenance',
                                    'Provide containment if necessary'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 16,
                                additionalControls: [
                                    'NIL',
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Site Foreman',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                    ]
                },
            ]
        },
        {
            id: 4,
            name: 'Handover/Warranty',
            workActivities: [
                {
                    id: 7,
                    name: 'Administration (e.g. application, inspection, submission)',
                    hazards: [
                        {
                            id: 17,
                            name: 'Use of paper and toner',
                            riskEvaluation: {
                                id: 17,
                                possiblePollutionHealthAffection: 'Resource depletion',
                                existingImpactControls: [
                                    'Reduce filing printing by double sided printing, scanning and / or e-submission',
                                    'Drafts to be in soft copies',
                                    'Reuse one-side printed paper'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 17,
                                additionalControls: [
                                    'NIL',
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 18,
                            name: 'Electricity consumption',
                            riskEvaluation: {
                                id: 18,
                                possiblePollutionHealthAffection: 'Resource depletion',
                                existingImpactControls: [
                                    'Use energy star / green label computing equipment',
                                    'Use energy efficiency tested electrical appliance',
                                    'Use energy-saving lighting (e.g. T5, T8, PLC, LED)'
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 18,
                                additionalControls: [
                                    'NIL',
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
                        {
                            id: 19,
                            name: 'Improper disposal of toner',
                            riskEvaluation: {
                                id: 19,
                                possiblePollutionHealthAffection: 'Land / air / water pollution',
                                existingImpactControls: [
                                    'Agent to collect empty toner for proper disposal',
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                }
                            },
                            riskControl: {
                                id: 19,
                                additionalControls: [
                                    'NIL',
                                ],
                                irpn: {
                                    severity: 3,
                                    likelihood: 1,
                                    irpn: 3*1
                                },
                                implementationPerson: 'Admin-in-charge/ Project in-charge',
                                dueDate: 'On-going',
                                remarks: ''
                            }
                        },
        
                    ]
                },
                {
                    id: 8,
                    name: 'Defect rectification',
                    hazards: [
                        {
                            id: 20,
                            name: 'Refer to item 6 “Mobilisation and Site work”',
                            riskEvaluation: {
                                id: 20,
                                possiblePollutionHealthAffection: '',
                                existingImpactControls: [
                                ],
                                irpn: {
                                    severity: 0,
                                    likelihood: 0,
                                    irpn: 0
                                }
                            },
                            riskControl: {
                                id: 20,
                                additionalControls: [
                                ],
                                irpn: {
                                    severity: 0,
                                    likelihood: 0,
                                    irpn: 0
                                },
                                implementationPerson: '',
                                dueDate: '',
                                remarks: ''
                            }
                        },
        
                    ]
                },
            ]
        },
        {
            id: 5,
            name: 'Use of Product / Facility',
            workActivities: [
                {
                    id: 9,
                    name: 'Cheng Seng Electric Co. Pte Ltd has no control or influence on this life-cycle stage as usage and maintenance is by end-customer.',
                    hazards: [
                    ]
                }
            ]
        },
        {
            id: 6,
            name: 'End of Life / Disposal',
            workActivities: [
                {
                    id: 10,
                    name: 'Cheng Seng Electric Co. Pte Ltd has no control or influence on this life-cycle stage as disposal is by end-customer.',
                    hazards: [
                    ]
                }
            ]
        }
    ],
}
