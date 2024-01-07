import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment26 = {
    id: 26,
    name: 'CSE-RA-04-02 Health Aspects of Humans (2022)',
    process: {
        id: 26,
        name: 'Health Aspects of Humans',
        location: 'Workplace',
    },
    referenceNumber: 'CSE-RA-04-02 / Rev 01',
    raMembers: [
        {
            id: 75,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 76,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 77,
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
            name: 'All types of activities involves humans',
            hazards: [
                {
                    id: 243,
                    name: "Decreased mental alertness",
                    riskEvaluation: {
                        id: 243,
                        possiblePollutionHealthAffection: "Body injury/sick",
                        existingImpactControls: [
                            "Worker(s) to have enough rest to prepare for the next working day",
                            "Apply buddy system"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 243,
                        additionalControls: [
                            "Monitor work pattern, MCs of workers/staff",
                            "Checking of any unwell workers/staff during toolbox meeting"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },                
                {
                    id: 244,
                    name: "Loss of concentration",
                    riskEvaluation: {
                        id: 244,
                        possiblePollutionHealthAffection: "Body injury",
                        existingImpactControls: [
                            "Worker(s) to have enough rest to prepare for the next working day"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 244,
                        additionalControls: [
                            "Do not listen to music or talk on the phone, etc., while working on the site"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 245,
                    name: "Excessive workload",
                    riskEvaluation: {
                        id: 245,
                        possiblePollutionHealthAffection: "Body injury",
                        existingImpactControls: [
                            "Worker(s) to have enough rest to prepare for the next working day",
                            "Apply buddy system"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 245,
                        additionalControls: [
                            "Allow breaks in between working hours"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 246,
                    name: "Prolonged working hours",
                    riskEvaluation: {
                        id: 246,
                        possiblePollutionHealthAffection: "Fatigue, body injury/sick",
                        existingImpactControls: [
                            "Worker(s) to have enough rest to prepare for the next working day",
                            "Go to see a doctor if the body is not feeling well",
                            "Apply buddy system"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 2,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 246,
                        additionalControls: [
                            "Allow breaks in between working hours"
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 247,
                    name: "Lack of adequate training",
                    riskEvaluation: {
                        id: 247,
                        possiblePollutionHealthAffection: "Body injury",
                        existingImpactControls: [
                            "Giving workers adequate training and MOM requirement training",
                            "Apply buddy system with a senior worker"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 247,
                        additionalControls: [
                            "Supervision by supervisor"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 248,
                    name: "Smoking",
                    riskEvaluation: {
                        id: 248,
                        possiblePollutionHealthAffection: "Health disease (e.g., cardio vascular/respiratory) may lead to illness",
                        existingImpactControls: [
                            "No Smoking on the Site at all times",
                            "Educate workers that smoking kills and encourage them to quit smoking"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 248,
                        additionalControls: [
                            "Promote quit smoking with incentives"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 249,
                    name: "Alcohol misuse",
                    riskEvaluation: {
                        id: 249,
                        possiblePollutionHealthAffection: "Health disease (e.g., cardio vascular/respiratory) may lead to other illness",
                        existingImpactControls: [
                            "No drinking of alcohol on the Site at all times"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 249,
                        additionalControls: [
                            "Promote quit drinking alcohol with incentives"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 250,
                    name: "Health risks uncovered from medical examination",
                    riskEvaluation: {
                        id: 250,
                        possiblePollutionHealthAffection: "Health disease may lead to other illness",
                        existingImpactControls: [
                            "Worker to declare any health issue to supervisor immediately",
                            "Worker to go for another type(s) medical examination to check for the suspected health risk."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 250,
                        additionalControls: [
                            "Do not allow high-risk work for suspected health issue worker"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 251,
                    name: "Individual susceptibility to certain health risks",
                    riskEvaluation: {
                        id: 251,
                        possiblePollutionHealthAffection: "Health disease may lead to other illness",
                        existingImpactControls: [
                            "Worker to declare any health issue to supervisor immediately",
                            "Worker to go for another type(s) medical examination to check for the suspected health risk."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 251,
                        additionalControls: [
                            "Do not allow high-risk work for suspected health issue worker"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 252,
                    name: "Poor working attitude",
                    riskEvaluation: {
                        id: 252,
                        possiblePollutionHealthAffection: "Conflict between team-mates, physical fights",
                        existingImpactControls: [
                            "Conduct regular bonding session",
                            "Provision of feedback form for improvements"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        }
                    },
                    riskControl: {
                        id: 252,
                        additionalControls: [
                            "Supervision by supervisor"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-charge/Site Foreman",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }
            ]
        }
    ]
}