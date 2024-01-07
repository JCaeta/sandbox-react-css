import {signature1 } from './signatures/signature1'
import {signature2 } from './signatures/signature2'
import {signature3 } from './signatures/signature3'
import {signature4 } from './signatures/signature4'

export const riskAssessment27 = {
    id: 27,
    name: 'CSE-RA-04-01 Office Activity (2022)',
    process: {
        id: 27,
        name: 'Office Activities',
        location: 'Office',
    },
    referenceNumber: 'CSE-RA-04-01 /Rev 01',
    raMembers: [
        {
            id: 78,
            name: 'Lee Han Pin',
            isLeader: true,
            signature: signature1,
            designations: ['Manager'],
        },
        {
            id: 79,
            name: 'Chen Kok Leong',
            isLeader: false,
            signature: signature2,
            designations: ['Project Coordinator'],
        },
        {
            id: 80,
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
            name: 'Use of Chairs',
            hazards: [
                {
                    id: 253,
                    name: "Improper Working Posture",
                    riskEvaluation: {
                        id: 253,
                        possiblePollutionHealthAffection: "Back/Spine Injury to personnel",
                        existingImpactControls: [
                            "Personnel observe proper working posture.",
                            "PCs to set up at correct height.",
                            "Chairs are of adjustable height."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 253,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 254,
                    name: "Personnel falling from broken chair",
                    riskEvaluation: {
                        id: 254,
                        possiblePollutionHealthAffection: "Bodily Injury to personnel",
                        existingImpactControls: [
                            "All Chairs are regularly checked, and damaged ones are immediately replaced with good ones."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 254,
                        additionalControls: [
                            "Regular reminder to personnel to check their chairs for damages before use."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },                
            ]
        },
        {
            id: -1,
            name: 'Use of Computer',
            hazards: [
                {
                    id: 255,
                    name: "Screen glare / flickers or staring at a computer for a long time",
                    riskEvaluation: {
                        id: 255,
                        possiblePollutionHealthAffection: "Eye Strain & Headache to Users",
                        existingImpactControls: [
                            "Proper maintenance of computers.",
                            "Replacement of faulty computers with good ones.",
                            "Adequate rest pauses."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 255,
                        additionalControls: [
                            "Regular briefing for computer users on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 256,
                    name: "Wrong Height / Distance",
                    riskEvaluation: {
                        id: 256,
                        possiblePollutionHealthAffection: "Neck & Body Pain to Users",
                        existingImpactControls: [
                            "Setting up computer monitors at appropriate height and distance."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 256,
                        additionalControls: [
                            "Regular briefing for computer users on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 257,
                    name: "Prolonged use of keyboard and mouse",
                    riskEvaluation: {
                        id: 257,
                        possiblePollutionHealthAffection: "Wrist & Elbow Pain to Users",
                        existingImpactControls: [
                            "Users to observe rest pauses to avoid prolonged use of keyboard and mouse."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 257,
                        additionalControls: [
                            "Regular briefing for computer users on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge"
                    }
                },
                {
                    id: 258,
                    name: "Emission of radiation from computer",
                    riskEvaluation: {
                        id: 258,
                        possiblePollutionHealthAffection: "Eye Strain to Users",
                        existingImpactControls: [
                            "Reduce brightness level for monitors.",
                            "Users to observe rest pauses."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 258,
                        additionalControls: [
                            "Regular briefing for computer users on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge"
                    }
                },
                {
                    id: 259,
                    name: "Contact with damaged wires",
                    riskEvaluation: {
                        id: 259,
                        possiblePollutionHealthAffection: "Electric Shock to users which may result in fatality to personnel",
                        existingImpactControls: [
                            "All electric cables are maintained in good condition and free from defects."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 259,
                        additionalControls: [
                            "Regular checking of electrical cables for computers."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-Charge"
                    }
                },
                {
                    id: 260,
                    name: "Inadequate Illumination",
                    riskEvaluation: {
                        id: 260,
                        possiblePollutionHealthAffection: "Eye Strain to Users",
                        existingImpactControls: [
                            "Provision of adequate illumination in all working areas."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 260,
                        additionalControls: [
                            "Regular checking of lighting in all work areas."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge"
                    }
                },                    
            ]
        },
        {
            id: -1,
            name: 'Use of Printer / Photocopy Machine',
            hazards: [
                {
                    id: 261,
                    name: "Hands contact with hot surfaces of machine while clearing paper jam",
                    riskEvaluation: {
                        id: 261,
                        possiblePollutionHealthAffection: "Burn Injury to Hands of personnel",
                        existingImpactControls: [
                            "Observe caution by keeping hands away from hot surfaces."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 261,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices."
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Admin-in-Charge"
                    }
                },
                {
                    id: 262,
                    name: "Hands contact with sharp edges of machine while clearing paper jam",
                    riskEvaluation: {
                        id: 262,
                        possiblePollutionHealthAffection: "Hand Injury to personnel",
                        existingImpactControls: [
                            "Observe caution by keeping hands away from sharp edges."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 262,
                        additionalControls: [
                            "Regular checking of electrical cables for computers."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 263,
                    name: "Contact with damaged wires",
                    riskEvaluation: {
                        id: 263,
                        possiblePollutionHealthAffection: "Electric Shock to users which may result in fatality to personnel",
                        existingImpactControls: [
                            "All electric cables are maintained in good condition and free from defects."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 263,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 264,
                    name: "Electrical hazards when switching on and off the photocopiers",
                    riskEvaluation: {
                        id: 264,
                        possiblePollutionHealthAffection: "Staff gets electric shock from contact with faulty electrical fittings.",
                        existingImpactControls: [
                            "Staff to do visual checks on the electrical sockets and wiring to ensure they are in good condition."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 264,
                        additionalControls: [
                            "Electrical circuits installed with protective devices such as Residual Current Circuit Breaker (RCCB) and fuses."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 265,
                    name: "Inhalation of toner dust during toner cartridge replacement",
                    riskEvaluation: {
                        id: 265,
                        possiblePollutionHealthAffection: "Staff experience eye and upper respiratory tract irritation.",
                        existingImpactControls: [
                            "Staff to observe proper toner cartridge replacement procedures."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 265,
                        additionalControls: [
                            "Regular reminder to all staff on safe work procedures."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
            ]
        },
        {
            id: -1,
            name: 'Storage of Documents/ Materials',
            hazards: [
                {
                    id: 266,
                    name: "Over-stacking of documents resulting in falling of documents",
                    riskEvaluation: {
                        id: 266,
                        possiblePollutionHealthAffection: "Bodily Injury to Personnel",
                        existingImpactControls: [
                            "Limit the storage height for documents."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 266,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 267,
                    name: "Toppling of materials / hit by materials sliding down",
                    riskEvaluation: {
                        id: 267,
                        possiblePollutionHealthAffection: "Injury to Personnel",
                        existingImpactControls: [
                            "Store on even ground / pallets with proper stacking within safe height limit of 2.3 m",
                            "Use PPE at all times (helmet & safety boots) at storage zones"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 267,
                        additionalControls: [
                            "Conduct safety meeting regularly / monitoring of PPE usage"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 268,
                    name: "Improper storage & arrangement",
                    riskEvaluation: {
                        id: 268,
                        possiblePollutionHealthAffection: "Injury to person(s) due to trip & fall or falling objects from height",
                        existingImpactControls: [
                            "Neat arrangement & stacking of materials",
                            "Proper housekeeping and materials not to be stored at slope"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 268,
                        additionalControls: [
                            "Conduct safety meeting regularly"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },                
                {
                    id: 269,
                    name: "Retrieving items stored above eye level and using step stool or ladder in an unsafe manner",
                    riskEvaluation: {
                        id: 269,
                        possiblePollutionHealthAffection: "Injury to Person",
                        existingImpactControls: [
                            "Step stools provided for staff's use"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 269,
                        additionalControls: [
                            "Regular briefing to all staff on safe work practices"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 270,
                    name: "Standing on chair to access upper shelves",
                    riskEvaluation: {
                        id: 270,
                        possiblePollutionHealthAffection: "Person falling and sustaining head and bodily injuries",
                        existingImpactControls: [
                            "Staff shall use proper equipment such as step stools or step ladders to access upper shelves"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 270,
                        additionalControls: [
                            "Regular briefing to all staff on safe work practices"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Manual Handling of Equipment',
            hazards: [
                {
                    id: 271,
                    name: "Hands contact with sharp/rough edges",
                    riskEvaluation: {
                        id: 271,
                        possiblePollutionHealthAffection: "Hand Injury to personnel",
                        existingImpactControls: [
                            "Personnel to wear gloves"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 271,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices.",
                            "Regular check on PPE."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 272,
                    name: "Improper Working Posture",
                    riskEvaluation: {
                        id: 272,
                        possiblePollutionHealthAffection: "Back/Spine Injury to personnel",
                        existingImpactControls: [
                            "Use of manual handling aids such as trolleys for moving heavy equipment.",
                            "Personnel observe proper working posture."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 272,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices during manual handling."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 273,
                    name: "Items dropping onto foot",
                    riskEvaluation: {
                        id: 273,
                        possiblePollutionHealthAffection: "Foot Injury to personnel",
                        existingImpactControls: [
                            "All personnel handling heavy items shall wear safety shoes."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 273,
                        additionalControls: [
                            "Regular briefing to personnel on safe work practices during manual handling."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },

            ]
        },
        {
            id: -1,
            name: 'Walking along pathway',
            hazards: [
                {
                    id: 274,
                    name: "Pathway obstructed posing tripping hazard",
                    riskEvaluation: {
                        id: 274,
                        possiblePollutionHealthAffection: "Bodily Injury to Personnel",
                        existingImpactControls: [
                            "Pathways are kept clear of obstruction at all times.",
                            "Proper workplace layout."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 274,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 275,
                    name: "Narrow Walkway leading to human collision",
                    riskEvaluation: {
                        id: 275,
                        possiblePollutionHealthAffection: "Bodily Injury to Personnel",
                        existingImpactControls: [
                            "All personnel shall take extra precautions."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 275,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
            ]
        },
        {
            id: -1,
            name: 'Use of all Office Equipment',
            hazards: [
                {
                    id: 276,
                    name: "Tripping over loose wires",
                    riskEvaluation: {
                        id: 276,
                        possiblePollutionHealthAffection: "Bodily Injury to Personnel",
                        existingImpactControls: [
                            "All wires shall be tucked neatly or concealed."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 276,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Operating the paper shredder to shred documents.',
            hazards: [
                {
                    id: 277,
                    name: "Electrical hazards when switching on and off the paper shredder",
                    riskEvaluation: {
                        id: 277,
                        possiblePollutionHealthAffection: "Person gets electric shock from contact with faulty electrical fittings.",
                        existingImpactControls: [
                            "Electrical circuits installed with protective devices such as Residual Current Circuit Breaker (RCCB) and circuit breakers."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 277,
                        additionalControls: [
                            "Regular briefing to all staff on safe use of shredder.",
                            "Staff to do visual checks on the electrical sockets and wiring to ensure they are in good condition."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 278,
                    name: "Entanglement hazards - Loose clothing, jewellery, identification card lanyard, long hair",
                    riskEvaluation: {
                        id: 278,
                        possiblePollutionHealthAffection: "Person gets electric shock from contact with faulty electrical fittings.",
                        existingImpactControls: [
                            "Staff to keep hands, loose clothing jewellery, long hair, lanyards clear of shredder opening."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 278,
                        additionalControls: [
                            "Regular briefing to all staff on safe use of shredder."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 279,
                    name: "Accidental activation of shredder when removing jammed paper or cleaning the shredder",
                    riskEvaluation: {
                        id: 279,
                        possiblePollutionHealthAffection: "Person sustains cuts on hands and fingers.",
                        existingImpactControls: [
                            "Ensure the paper shredder is switched off and plug removed from power socket prior to removing jammed paper or cleaning the shredder."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 279,
                        additionalControls: [
                            "Regular briefing to all staff on safe use of shredder."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 280,
                    name: "Overheating of shredder due to paper jam which may result in fire",
                    riskEvaluation: {
                        id: 280,
                        possiblePollutionHealthAffection: "Burns to Staff and Property Damage.",
                        existingImpactControls: [
                            "Switch off the power supply during paper jam to prevent the shredder from overheating."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 280,
                        additionalControls: [
                            "Regular briefing to all staff on safe use of shredder."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
            ]
        },
        {
            id: -1,
            name: 'Cutting Papers with Guillotine Paper Cutter',
            hazards: [
                {
                    id: 281,
                    name: "Hands contact with sharp edges of machine while Cutting paper",
                    riskEvaluation: {
                        id: 281,
                        possiblePollutionHealthAffection: "Hand Injury to person.",
                        existingImpactControls: [
                            "Keeping hands away from the Cutting Edge"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 281,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
            ]
        },
        {
            id: -1,
            name: 'Lamination of Documents',
            hazards: [
                {
                    id: 282,
                    name: "Heat from the Machine",
                    riskEvaluation: {
                        id: 282,
                        possiblePollutionHealthAffection: "Skin burn.",
                        existingImpactControls: [
                            "Observe caution by keeping hands away from hot surfaces."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 282,
                        additionalControls: [
                            "Regular reminder to personnel on safe work practices."
                        ],
                        irpn: {
                            severity: 2,
                            likelihood: 1,
                            irpn: 2
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 283,
                    name: "Overloading of electrical sockets",
                    riskEvaluation: {
                        id: 283,
                        possiblePollutionHealthAffection: "Burns to person and property damage.",
                        existingImpactControls: [
                            "Electrical circuits installed with protective devices such as Residual Current Circuit Breaker (RCCB) and circuit breakers."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 283,
                        additionalControls: [
                            "Regular briefing for computer users on safe work practices."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Heating Food in microwave oven',
            hazards: [
                {
                    id: 284,
                    name: "Staff exposed to electrical hazards when switching on and off the microwave ovens",
                    riskEvaluation: {
                        id: 284,
                        possiblePollutionHealthAffection: "Electrocution, Death",
                        existingImpactControls: [
                            "Electrical circuits installed with protective devices such as Residual Current Circuit Breaker (RCCB) and circuit breakers."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 284,
                        additionalControls: [
                            "Regular briefing to all staff on safe work practices.",
                            "Reminders emphasized through notices/ posters"
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 285,
                    name: "Use of metal containers or aluminium foil to heat food which may cause fire",
                    riskEvaluation: {
                        id: 285,
                        possiblePollutionHealthAffection: "Burns to Person and Property Damage",
                        existingImpactControls: [
                            "Only microwave friendly containers and utensils are used."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 285,
                        additionalControls: [
                            "Regular briefing to all staff on safe work practices.",
                            "Reminders emphasized through notices/ posters"
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-Charge",
                        status: "On-going"
                    }
                },
                {
                    id: 286,
                    name: "Heating food in sealed containers causing explosion",
                    riskEvaluation: {
                        id: 286,
                        possiblePollutionHealthAffection: "Damage to oven and injury to person",
                        existingImpactControls: [
                            "Food heated in open containers."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 286,
                        additionalControls: [
                            "Regular briefing to all staff on safe work practices.",
                            "Reminders emphasized through notices/posters."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 287,
                    name: "Radiation emissions from microwave oven",
                    riskEvaluation: {
                        id: 287,
                        possiblePollutionHealthAffection: "Illness to Personnel",
                        existingImpactControls: [
                            "Microwave radiation emitted in low dosages and within limits in a well-enclosed microwave oven. (Providing a reasonably functional microwave oven)"
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 287,
                        additionalControls: [
                            "Regular briefing to all staff.",
                            "Regular cleaning of ovens."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Use of table top water dispensers in offices',
            hazards: [
                {
                    id: 288,
                    name: "Hot water from water dispenser",
                    riskEvaluation: {
                        id: 288,
                        possiblePollutionHealthAffection: "Hands scalded by hot water",
                        existingImpactControls: [
                            "Staff to exercise caution when taking hot water.",
                            "Cup placed close to the faucet of the dispenser."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 288,
                        additionalControls: [
                            "Regular briefing to all staff on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 289,
                    name: "Ergonomic Hazard - Improper manual lifting posture when replacing water bottles",
                    riskEvaluation: {
                        id: 289,
                        possiblePollutionHealthAffection: "Staffs sustain back and upper body strain due to improper lifting posture and feet injuries from dropping the water bottle onto the feet.",
                        existingImpactControls: [
                            "All staff observes proper lifting posture.",
                            "Get assistance from colleagues while lifting."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 289,
                        additionalControls: [
                            "Regular briefing to all staff on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 290,
                    name: "Poorly maintained water dispensers - bacteria build up on faucets and drip trays",
                    riskEvaluation: {
                        id: 290,
                        possiblePollutionHealthAffection: "May cause staff to feel discomfort or fall sick.",
                        existingImpactControls: [
                            "Preventive maintenance program in place including the replacement of water filters."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 290,
                        additionalControls: [
                            "Regular briefing to all staff on safe work practices.",
                            "Periodic cleaning of water dispensers."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 291,
                    name: "Spillage of water onto floor - Slip and Fall",
                    riskEvaluation: {
                        id: 291,
                        possiblePollutionHealthAffection: "Bodily Injury to Person",
                        existingImpactControls: [
                            "Water dispensers installed with spill collection trays."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 291,
                        additionalControls: [
                            "Regular briefing to all staff on safe work practices."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        },
        {
            id: -1,
            name: 'Use of electrical appliances such as microwave, kettle, computer, photocopy machine, etc',
            hazards: [
                {
                    id: 292,
                    name: "Faulty appliances, damaged wire - Electrical shock/Electrocution of employee, Electric fire leading to property damage",
                    riskEvaluation: {
                        id: 292,
                        possiblePollutionHealthAffection: "Electrical shock/Electrocution of employee, Electric fire leading to property damage",
                        existingImpactControls: [
                            "Faulty equipment sent for repairs at once.",
                            "Fitted with fuse.",
                            "Power cords kept away from heat, water, and oil.",
                            "Equipment not cleaned with flammable substances such as acetone.",
                            "Power cords inspected regularly and replaced when worn out."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 2,
                            irpn: 10
                        }
                    },
                    riskControl: {
                        id: 292,
                        additionalControls: [
                            "Dissemination of MOM, A guide to Workplace Safety and Health to all employees."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 293,
                    name: "Overloading electrical points - Electrocution/Electric shock to employees",
                    riskEvaluation: {
                        id: 293,
                        possiblePollutionHealthAffection: "Electrocution/Electric shock to employees",
                        existingImpactControls: [
                            "Employees are briefed not to overload electrical points."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 2,
                            irpn: 8
                        }
                    },
                    riskControl: {
                        id: 293,
                        additionalControls: [
                            "Wires to be protected by RCCB."
                        ],
                        irpn: {
                            severity: 4,
                            likelihood: 1,
                            irpn: 4
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 294,
                    name: "Overheating of appliances leading to fire hazards - Fatal injury to employees, destruction of property",
                    riskEvaluation: {
                        id: 294,
                        possiblePollutionHealthAffection: "Fatal injury to employees, destruction of property",
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
                        id: 294,
                        additionalControls: [
                            "Employees trained on fire safety and handling fire emergency situations."
                        ],
                        irpn: {
                            severity: 5,
                            likelihood: 1,
                            irpn: 5
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                },
                {
                    id: 295,
                    name: "Tripping or entangling hazard - Bodily injury due to slips, trips, and falls",
                    riskEvaluation: {
                        id: 295,
                        possiblePollutionHealthAffection: "Bodily injury due to slips, trips, and falls",
                        existingImpactControls: [
                            "All cables and wires on the floor to be properly cable-tied and cased in.",
                            "All cables/wires on desks to be properly trunked and kept away from passageway."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 2,
                            irpn: 6
                        }
                    },
                    riskControl: {
                        id: 295,
                        additionalControls: [
                            "All employees to be aware of the surrounding and clean/tidy up as needed.",
                            "Proper housekeeping of desk PC and cables."
                        ],
                        irpn: {
                            severity: 3,
                            likelihood: 1,
                            irpn: 3
                        },
                        implementationPerson: "Admin-in-Charge",
                        dueDate: "On-going",
                        remarks: ""
                    }
                }                
            ]
        }
    ]
}