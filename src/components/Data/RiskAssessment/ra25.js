import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment25 = {
    id: 25,
    name: 'CSE-RA-02-01 Manual Handling & Storage of Materials (2022)',
    process: {
        id: 25,
        name: 'Manual Handling and Storage of Materials',
        location: 'Office/Workplace',
    },
    referenceNumber: 'CSE-RA-02-01 / Rev 01',
    raMembers: [
        {
            id: 73,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 74,
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
            name: 'Vincent Lee',
            designations: ['Director'],
            signature: signature4,
        },
        date: '01/05/2022',
        name: 'Vincent Lee',
    },
    originalAssessmentDate: '02/06/2020',
    lastReviewDate: '01/05/2022',
    nextReviewDate: '30/04/2025',
    raTasks: [],
    workActivities: [
        {
            id: -1,
            name: '',
            hazards: [
                {
                    id: 235,
                    name: "Toppling of materials when lifting/moving them",
                    riskEvaluation: {
                        id: 235,
                        possiblePollutionHealthAffection: "Minor cuts and bruises to person(s) & damages to materials",
                        existingImpactControls: [
                            "Unloading zone cordoned off to prevent unauthorized entry",
                            "Qualified lifting person",
                            "Truck/lorry crane stationed on even ground",
                            "Do not stack up too high when moving them",
                            "Wear PPE"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 235,
                        additionalControls: [
                            "Keep workers at a safe distance",
                            "Close supervision by lifting supervision"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman/Storeman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 236,
                    name: "Body, Hands caught in-between materials",
                    riskEvaluation: {
                        id: 236,
                        possiblePollutionHealthAffection: "Minor cuts and bruises to person(s)",
                        existingImpactControls: [
                            "Teamwork",
                            "Wear hand gloves",
                            "Use the help of lifting equipment if have difficulties reaching"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 236,
                        additionalControls: [
                            "Close supervision"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman/Storeman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 237,
                    name: "Dropping of heavy/bulky object",
                    riskEvaluation: {
                        id: 237,
                        possiblePollutionHealthAffection: "Foot contusions/bruises to the person directly involved in the operation",
                        existingImpactControls: [
                            "Wear safety shoes",
                            "Wear helmet"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 237,
                        additionalControls: [
                            "Keep workers at a safe distance",
                            "Close supervision by lifting supervision"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman/Storeman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 238,
                    name: "Heavy/bulky materials/object",
                    riskEvaluation: {
                        id: 238,
                        possiblePollutionHealthAffection: "Musculoskeletal injuries to the person directly involved in the operation",
                        existingImpactControls: [
                            "Mechanically assisted lift if needed",
                            "Request for help from fellow workers"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 238,
                        additionalControls: [
                            "Regular follow-up on existing control measures"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman/Storeman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Storage of Materials',
            hazards: [
                {
                    id: 239,
                    name: "Toppling of materials/hit by materials sliding down",
                    riskEvaluation: {
                        id: 239,
                        possiblePollutionHealthAffection: "Bodily Injury to Personnel",
                        existingImpactControls: [
                            "Store on even ground/pallets with proper stacking within safe height limit of 2.3 m",
                            "Use of PPE at all times (safety boots, helmet) at storage zones"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 239,
                        additionalControls: [
                            "Regular reminder on safe work procedures during safety briefing",
                            "Regular inspection of work areas",
                            "Regular enforcement of safety rules and regulations among workers"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman/Storeman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 240,
                    name: "Improper storage & arrangement",
                    riskEvaluation: {
                        id: 240,
                        possiblePollutionHealthAffection: "Bodily Injury to person(s) due to falling objects from height",
                        existingImpactControls: [
                            "Neat arrangement & stacking of materials",
                            "Proper housekeeping",
                            "Regular inspection of work areas",
                            "Regular enforcement of safety rules and regulations among workers",
                            "Materials not to be stored at slope"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 240,
                        additionalControls: [
                            "Regular reminder on safe work procedures during safety briefing",
                            "Use other supports such as rope/barriers to secure if needed"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Site Foreman/Storeman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 241,
                    name: "Fire hazard",
                    riskEvaluation: {
                        id: 241,
                        possiblePollutionHealthAffection: "Injury/Death to persons(s) and property lost/damage",
                        existingImpactControls: [
                            "Stored flammable materials separately",
                            "Storage area provided with fire extinguisher",
                            "Fire exits marked clearly and kept clear"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 241,
                        additionalControls: [
                            "Regular reminder on the importance of fire safety"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Site Foreman/Storeman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 242,
                    name: "Materials/spills on the floor may cause slip and fall",
                    riskEvaluation: {
                        id: 242,
                        possiblePollutionHealthAffection: "Bodily injuries",
                        existingImpactControls: [
                            "Practise good housekeeping",
                            "Immediately clean up the spillage on the floor",
                            "Ensure materials stored does not obstruct the passageways"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 242,
                        additionalControls: [
                            "Close supervision"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Site Foreman/Storeman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        }
    ]
}