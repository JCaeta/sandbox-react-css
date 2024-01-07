import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment23 = {
    id: 23,
    name: 'CSE-RA-02-03 Loading & Unloading (2022)',
    process: {
        id: 23,
        name: 'Loading and Unloading',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-02-03 / Rev 01',
    raMembers: [
        {
            id: 67,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 68,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 69,
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
            name: 'Manual loading and unloading',
            hazards: [
                {
                    id: 210,
                    name: "Heavy/Bulky materials/equipment",
                    riskEvaluation: {
                        id: 210,
                        possiblePollutionHealthAffection: "Improper Working, Musculoskeletal injuries to worker",
                        existingImpactControls: [
                            "Use of manual handling aids such as trolleys",
                            "Personnel observe proper working posture",
                            "Teamwork"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 210,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices during manual handling"
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
                    id: 211,
                    name: "Items dropping onto foot",
                    riskEvaluation: {
                        id: 211,
                        possiblePollutionHealthAffection: "Bodily Injury to personnel",
                        existingImpactControls: [
                            "All personnel to wear safety shoes",
                            "Do not attempt to carry too many things at one time"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 211,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices during manual handling"
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
                    id: 212,
                    name: "Hands contact with sharp/rough edges",
                    riskEvaluation: {
                        id: 212,
                        possiblePollutionHealthAffection: "Hand Injury to personnel",
                        existingImpactControls: [
                            "Personnel to wear gloves",
                            "Cover up sharp edges during transportation"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 212,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices",
                            "Regular check on PPE"
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
        },
        {
            id: -1,
            name: 'Use of Trolleys',
            hazards: [
                {
                    id: 213,
                    name: "Legs contact with wheels of trolleys",
                    riskEvaluation: {
                        id: 213,
                        possiblePollutionHealthAffection: "Foot Injury to Personnel",
                        existingImpactControls: [
                            "All personnel manoeuvring trolleys/pallet jacks shall wear safety shoes"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 213,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices"
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
                    id: 214,
                    name: "Materials falling down from trolleys",
                    riskEvaluation: {
                        id: 214,
                        possiblePollutionHealthAffection: "Bodily Injury to Personnel",
                        existingImpactControls: [
                            "All materials shall be properly secured",
                            "All personnel shall wear safety shoes"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 214,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices"
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
                    id: 215,
                    name: "Trolleys hitting against personnel",
                    riskEvaluation: {
                        id: 215,
                        possiblePollutionHealthAffection: "Bodily Injury to Personnel",
                        existingImpactControls: [
                            "Exercise proper traffic control at the loading bay"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 215,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices"
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
        },
        {
            id: -1,
            name: 'Vehicle Entering / Reversing',
            hazards: [
                {
                    id: 216,
                    name: "Collide with stationary object on site",
                    riskEvaluation: {
                        id: 216,
                        possiblePollutionHealthAffection: "Property damage",
                        existingImpactControls: [
                            "Worker to guide vehicle driver into the site",
                            "Designated traffic controller to be deployed"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 216,
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
                {
                    id: 217,
                    name: "Knock onto workers walking on site",
                    riskEvaluation: {
                        id: 217,
                        possiblePollutionHealthAffection: "Injury to head, body and limbs and death to workers",
                        existingImpactControls: [
                            "Worker to guide vehicle driver into the site",
                            "Designated traffic controller to be deployed"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 217,
                        additionalControls: [
                            "Regular review of existing risk control measures"
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
            ]
        },
        {
            id: -1,
            name: 'Forklift Operation',
            hazards: [
                {
                    id: 218,
                    name: "Falling Object due to exceed the recommended load limit of the forklift and the capacity of the fork",
                    riskEvaluation: {
                        id: 218,
                        possiblePollutionHealthAffection: "Workers bodily injury hit by falling objects/heavy load during loading and unloading",
                        existingImpactControls: [
                            "To lift materials one at a time",
                            "Ensure the goods to be secured",
                            "Do not exceed the recommended load limit of the forklift and the capacity of the fork",
                            "Position the load according to the recommended load centre",
                            "Do not add extra weight to counterbalance an overload"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 218,
                        additionalControls: [
                            "Enforce strict and continuous supervision"
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
                    id: 219,
                    name: "Worker being knocked down by the forklift",
                    riskEvaluation: {
                        id: 219,
                        possiblePollutionHealthAffection: "Workers bodily injuries, fractures, sprains, possibly fatal",
                        existingImpactControls: [
                            "Competent qualify license (forklift licence for 3 or 5 tons) driver",
                            "Conduct safety briefing on road speed limit",
                            "Moving into the path of the forklift",
                            "Do not use mobile phone while operating equipment",
                            "Travel along designated path where possible"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 219,
                        additionalControls: [
                            "Decrease speed at all corners, sound horn, and watch the swing of both the rear of the lift truck and the load",
                            "Always look in the direction of travel. Keep an eye out for oil spots, wet spots, loose objects, holes, rough surfaces, people, and vehicles on the floor or roadway",
                            "If the load blocks your vision, travel slowly in reverse",
                            "Watch forklift rear end swing"
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
            ]
        }
    ]
}