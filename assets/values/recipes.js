var BLUEPRINTS =
{
    "fsd-faster-fsd-boot-sequence": {
        "name": "Faster FSD Boot Sequence",
        "module": "FSD",
        "recipes": {
            "1": {
                "components": {
                    "grid-resistors": 2,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "boot-time": {
                        "name": "Boot Time",
                        "isPercent": true,
                        "min": 0,
                        "max": -15
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 1,
                    "hybrid-capacitors": 2,
                    "heat-exchangers": 2,
                    "micro-controllers": 1
                },
                "effects": {
                    "boot-time": {
                        "name": "Boot Time",
                        "isPercent": true,
                        "min": -10,
                        "max": -31
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 10,
                        "max": 4
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 2
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -10,
                        "max": -3
                    }
                }
            },
            "3": {
                "components": {
                    "sulphur": 1,
                    "hybrid-capacitors": 2,
                    "heat-exchangers": 2,
                    "security-firmware-patch": 1,
                    "hardware-diagnostic-sensor": 1
                },
                "effects": {
                    "boot-time": {
                        "name": "Boot Time",
                        "isPercent": true,
                        "min": -20,
                        "max": -45
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 14,
                        "max": 10
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": 5
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -15,
                        "max": -6
                    }
                }
            },
            "4": {
                "components": {
                    "chromium": 1,
                    "electrochemical-arrays": 2,
                    "heat-vanes": 2,
                    "modified-embedded-firmware": 1,
                    "hardware-diagnostic-sensor": 1
                },
                "effects": {
                    "boot-time": {
                        "name": "Boot Time",
                        "isPercent": true,
                        "min": -31,
                        "max": -61
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 20,
                        "max": 14
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 9
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": -9
                    }
                }
            },
            "5": {
                "components": {
                    "selenium": 1,
                    "polymer-capacitors": 2,
                    "proto-heat-radiators": 2,
                    "radiation-baffle": 1
                },
                "effects": {
                    "boot-time": {
                        "name": "Boot Time",
                        "isPercent": true,
                        "min": -40,
                        "max": -75
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 25,
                        "max": 20
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -25,
                        "max": -12
                    }
                }
            }
        }
    },
    "fsd-increased-fsd-range": {
        "name": "Increased FSD Range",
        "module": "FSD",
        "recipes": {
            "1": {
                "components": {
                    "atypical-disrupted-wake-echoes": 2,
                    "chemical-processors": 2,
                    "arsenic": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": 4
                    }
                }
            },
            "2": {
                "components": {
                    "atypical-disrupted-wake-echoes": 3,
                    "chemical-processors": 2,
                    "arsenic": 2,
                    "praseodymium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 20,
                        "max": 5
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -10,
                        "max": -3
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 2
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": 3,
                        "max": 14
                    }
                }
            },
            "3": {
                "components": {
                    "atypical-disrupted-wake-echoes": 2,
                    "chemical-processors": 3,
                    "selenium": 2,
                    "yttrium": 1,
                    "modular-terminals": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 30,
                        "max": 10
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -15,
                        "max": -6
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": 5
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": 8,
                        "max": 25
                    }
                }
            },
            "4": {
                "components": {
                    "anomalous-fsd-telemetry": 2,
                    "chemical-distillery": 3,
                    "yttrium": 2,
                    "energy-grid-assembly": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 39,
                        "max": 14
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": -9
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 9
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": 11,
                        "max": 35
                    }
                }
            },
            "5": {
                "components": {
                    "strange-wake-solutions": 2,
                    "chemical-manipulators": 2,
                    "polonium": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 20
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -25,
                        "max": -12
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 11
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": 15,
                        "max": 45
                    }
                }
            }
        }
    },
    "fsd-shielded-fsd": {
        "name": "Shielded FSD",
        "module": "FSD",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 1,
                    "shield-emitters": 2
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 31,
                        "max": 25
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 25
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": -6
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": -4,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "carbon": 1,
                    "filament-composites": 2,
                    "shielding-sensors": 2,
                    "insulating-membrane": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 35,
                        "max": 20
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 50
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -6,
                        "max": -11
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": -6,
                        "max": -2
                    }
                }
            },
            "3": {
                "components": {
                    "carbon": 1,
                    "filament-composites": 2,
                    "shielding-sensors": 2,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 39,
                        "max": 14
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 39,
                        "max": 75
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -11,
                        "max": -16
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": -10,
                        "max": -5
                    }
                }
            },
            "4": {
                "components": {
                    "vanadium": 1,
                    "high-density-composites": 2,
                    "compound-shielding": 2,
                    "bromellite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 45,
                        "max": 10
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 50,
                        "max": 100
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 16,
                        "max": 21
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": -12,
                        "max": -6
                    }
                }
            },
            "5": {
                "components": {
                    "tungsten": 1,
                    "proprietary-composites": 2,
                    "imperial-shielding": 1,
                    "radiation-baffle": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 5
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 61,
                        "max": 125
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 21,
                        "max": 25
                    },
                    "optimised-mass": {
                        "name": "Optimised Mass",
                        "isPercent": true,
                        "min": -16,
                        "max": -8
                    }
                }
            }
        }
    },
    "thrusters-dirty-drive-tuning": {
        "name": "Dirty Drive Tuning",
        "module": "Thrusters",
        "recipes": {
            "1": {
                "components": {
                    "specialised-legacy-firmware": 2,
                    "chemical-processors": 2
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 0,
                        "max": 4
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 20,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 3,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -4,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "specialised-legacy-firmware": 2,
                    "mechanical-equipment": 2,
                    "chemical-distillery": 1,
                    "modular-terminals": 1
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 4,
                        "max": 10
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 39,
                        "max": 10
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 8,
                        "max": 2
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -12,
                        "max": 1
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -6,
                        "max": -1
                    }
                }
            },
            "3": {
                "components": {
                    "specialised-legacy-firmware": 1,
                    "chromium": 2,
                    "mechanical-components": 2,
                    "chemical-manipulators": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 10,
                        "max": 14
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 61,
                        "max": 20
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 11,
                        "max": 3
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -18,
                        "max": 4
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -10,
                        "max": -2
                    }
                }
            },
            "4": {
                "components": {
                    "modified-consumer-firmware": 2,
                    "selenium": 3,
                    "configurable-components": 2,
                    "pharmaceutical-isolators": 1,
                    "heatsink-interlink": 1
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 14,
                        "max": 20
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 79,
                        "max": 29
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 15,
                        "max": 5
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -24,
                        "max": 5
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -12,
                        "max": -4
                    }
                }
            },
            "5": {
                "components": {
                    "cracked-industrial-firmware": 2,
                    "cadmium": 2,
                    "pharmaceutical-isolators": 2,
                    "exhaust-manifold": 1
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 20,
                        "max": 2
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 100,
                        "max": 29
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 8
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -31,
                        "max": 8
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -16,
                        "max": -5
                    }
                }
            }
        }
    },
    "thrusters-drive-strengthening": {
        "name": "Drive Strengthening",
        "module": "Thrusters",
        "recipes": {
            "1": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 2
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 20
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "vanadium": 2,
                    "shielding-sensors": 1,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 20,
                        "max": 5
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 39
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -6,
                        "max": -20
                    },
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": -5,
                        "max": -2
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "vanadium": 3,
                    "shielding-sensors": 2,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 31,
                        "max": 10
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 61
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": -6,
                        "max": -3
                    }
                }
            },
            "4": {
                "components": {
                    "heat-dispersion-plate": 1,
                    "high-density-composites": 3,
                    "compound-shielding": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 39,
                        "max": 14
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 39,
                        "max": 81
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -15,
                        "max": -40
                    },
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": -9,
                        "max": -4
                    }
                }
            },
            "5": {
                "components": {
                    "heat-exchangers": 1,
                    "proprietary-composites": 2,
                    "imperial-shielding": 1,
                    "articulation-motors": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 20
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 50,
                        "max": 100
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -20,
                        "max": -50
                    },
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": -11,
                        "max": -5
                    }
                }
            }
        }
    },
    "thrusters-clean-drive-tuning": {
        "name": "Clean Drive Tuning",
        "module": "Thrusters",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "irregular-emission-data": 1,
                    "niobium": 1
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 0,
                        "max": 2
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "specialised-legacy-firmware": 1,
                    "conductive-components": 2,
                    "unexpected-emission-data": 2,
                    "tin": 1,
                    "samarium": 1
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 1,
                        "max": 5
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -10,
                        "max": -4
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -6,
                        "max": -20
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -5,
                        "max": -1
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 3
                    }
                }
            },
            "3": {
                "components": {
                    "specialised-legacy-firmware": 1,
                    "conductive-components": 3,
                    "unexpected-emission-data": 2,
                    "tin": 2,
                    "power-converter": 1
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 3,
                        "max": 9
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -15,
                        "max": -8
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -6,
                        "max": -2
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": 8
                    }
                }
            },
            "4": {
                "components": {
                    "modified-consumer-firmware": 2,
                    "conductive-ceramics": 3,
                    "decoded-emission-data": 2,
                    "antimony": 1,
                    "power-converter": 1
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 5,
                        "max": 12
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": -12
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -15,
                        "max": -40
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -8,
                        "max": -4
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 11
                    }
                }
            },
            "5": {
                "components": {
                    "conductive-ceramics": 2,
                    "decoded-emission-data": 3,
                    "antimony": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "optimal-multiplier": {
                        "name": "Optimal Multiplier",
                        "isPercent": true,
                        "min": 8,
                        "max": 14
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -25,
                        "max": -16
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -20,
                        "max": -50
                    },
                    "optimal-mass": {
                        "name": "Optimal Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -5
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 15
                    }
                }
            }
        }
    },
    "booster-shield-blast-resistant-shield-booster": {
        "name": "Blast Resistant Shield Booster",
        "module": "Booster (Shield)",
        "recipes": {
            "1": {
                "components": {
                    "iron": 2,
                    "inconsistent-shield-soak-analysis": 1
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 5
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -2,
                        "max": 0
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "iron": 2,
                    "conductive-components": 2,
                    "untypical-shield-scans": 1,
                    "micro-controllers": 1
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 10
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -5,
                        "max": -3
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -5,
                        "max": -3
                    }
                }
            },
            "3": {
                "components": {
                    "iron": 1,
                    "conductive-components": 1,
                    "focus-crystals": 2,
                    "aberrant-shield-pattern-analysis": 1,
                    "magnetic-emitter-coil": null
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 15
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -7,
                        "max": -6
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -7,
                        "max": -6
                    }
                }
            }
        }
    },
    "booster-shield-heavy-duty-shield-booster": {
        "name": "Heavy Duty Shield Booster",
        "module": "Booster (Shield)",
        "recipes": {
            "1": {
                "components": {
                    "grid-resistors": 1,
                    "germanium": 2
                },
                "effects": {
                    "shield-boost": {
                        "name": "Shield Boost",
                        "isPercent": true,
                        "min": 0,
                        "max": 56
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 0,
                        "max": 2
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "distorted-shield-cycle-recordings": 1,
                    "hybrid-capacitors": 2,
                    "niobium": 2,
                    "cmm-composite": 1
                },
                "effects": {
                    "shield-boost": {
                        "name": "Shield Boost",
                        "isPercent": true,
                        "min": 46,
                        "max": 112
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 150,
                        "max": 100
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 2,
                        "max": 5
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 4
                    }
                }
            },
            "3": {
                "components": {
                    "distorted-shield-cycle-recordings": 1,
                    "hybrid-capacitors": 3,
                    "niobium": 3,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "shield-boost": {
                        "name": "Shield Boost",
                        "isPercent": true,
                        "min": 93,
                        "max": 168
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 200,
                        "max": 150
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 5,
                        "max": 9
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": 10
                    }
                }
            },
            "4": {
                "components": {
                    "inconsistent-shield-soak-analysis": 1,
                    "electrochemical-arrays": 3,
                    "tin": 2,
                    "emergency-power-cells": 1
                },
                "effects": {
                    "shield-boost": {
                        "name": "Shield Boost",
                        "isPercent": true,
                        "min": 140,
                        "max": 225
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 250,
                        "max": 200
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 9,
                        "max": 11
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 14
                    }
                }
            },
            "5": {
                "components": {
                    "untypical-shield-scans": 1,
                    "polymer-capacitors": 2,
                    "antimony": 2,
                    "emergency-power-cells": 1
                },
                "effects": {
                    "shield-boost": {
                        "name": "Shield Boost",
                        "isPercent": true,
                        "min": 187,
                        "max": 279
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 300,
                        "max": 250
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 11,
                        "max": 14
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 20
                    }
                }
            }
        }
    },
    "booster-shield-kinetic-resistant-shield-booster": {
        "name": "Kinetic Resistant Shield Booster",
        "module": "Booster (Shield)",
        "recipes": {
            "1": {
                "components": {
                    "iron": 2,
                    "inconsistent-shield-soak-analysis": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 5
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -2,
                        "max": 0
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "grid-resistors": 2,
                    "germanium": 2,
                    "untypical-shield-scans": 1,
                    "micro-controllers": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 10
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -5,
                        "max": -3
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -5,
                        "max": -3
                    }
                }
            },
            "3": {
                "components": {
                    "grid-resistors": 1,
                    "hybrid-capacitors": 1,
                    "focus-crystals": 2,
                    "aberrant-shield-pattern-analysis": 1,
                    "magnetic-emitter-coil": null
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 15
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -7,
                        "max": -6
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -7,
                        "max": -6
                    }
                }
            }
        }
    },
    "booster-shield-resistance-augmented-shield-booster": {
        "name": "Resistance Augmented Shield Booster",
        "module": "Booster (Shield)",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "germanium": 1,
                    "shielding-sensors": 1
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 8,
                        "max": 0
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 2
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 2
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 2
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -4,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "phosphorus": 1,
                    "conductive-components": 2,
                    "focus-crystals": 2,
                    "compound-shielding": 1,
                    "praseodymium": null
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 15,
                        "max": 3
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 5
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 5
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 5
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -8,
                        "max": -2
                    }
                }
            },
            "3": {
                "components": {
                    "phosphorus": 1,
                    "conductive-components": 3,
                    "focus-crystals": 2,
                    "compound-shielding": 2,
                    "modular-terminals": null
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 23,
                        "max": 8
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 7
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 7
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 7
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -12,
                        "max": -4
                    }
                }
            },
            "4": {
                "components": {
                    "manganese": 2,
                    "conductive-ceramics": 3,
                    "refined-focus-crystals": 2,
                    "imperial-shielding": 1,
                    "radiation-baffle": 1
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 31,
                        "max": 11
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 7,
                        "max": 10
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 7,
                        "max": 10
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 7,
                        "max": 10
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -16,
                        "max": -6
                    }
                }
            },
            "5": {
                "components": {
                    "conductive-ceramics": 2,
                    "refined-focus-crystals": 3,
                    "imperial-shielding": 2,
                    "radiation-baffle": 1
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 39,
                        "max": 15
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 12
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 12
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 12
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": -8
                    }
                }
            }
        }
    },
    "booster-shield-thermal-resistant-shield-booster": {
        "name": "Thermal Resistant Shield Booster",
        "module": "Booster (Shield)",
        "recipes": {
            "1": {
                "components": {
                    "iron": 2,
                    "inconsistent-shield-soak-analysis": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 5
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -2,
                        "max": 0
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "germanium": 2,
                    "untypical-shield-scans": 1,
                    "micro-controllers": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 10
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -5,
                        "max": -3
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -5,
                        "max": -3
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "heat-dispersion-plate": 1,
                    "focus-crystals": 2,
                    "aberrant-shield-pattern-analysis": 1,
                    "magnetic-emitter-coil": null
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 15
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -7,
                        "max": -6
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -7,
                        "max": -6
                    }
                }
            }
        }
    },
    "power-plant-armoured-power-plant": {
        "name": "Armoured Power Plant",
        "module": "Power Plant",
        "recipes": {
            "1": {
                "components": {
                    "worn-shield-emitters": 1,
                    "vanadium": 2
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 20
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 8,
                        "max": 0
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 4,
                        "max": -6
                    }
                }
            },
            "2": {
                "components": {
                    "carbon": 2,
                    "shield-emitters": 2,
                    "high-density-composites": 1,
                    "osmium": 1
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 40
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 15,
                        "max": 3
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 5,
                        "max": -6
                    }
                }
            },
            "3": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 2,
                    "high-density-composites": 2,
                    "cmm-composite": 1
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 29,
                        "max": 61
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 23,
                        "max": 8
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 7,
                        "max": -7
                    }
                }
            },
            "4": {
                "components": {
                    "vanadium": 1,
                    "shielding-sensors": 2,
                    "proprietary-composites": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 40,
                        "max": 79
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 31,
                        "max": 11
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 8,
                        "max": -8
                    }
                }
            },
            "5": {
                "components": {
                    "tungsten": 1,
                    "compound-shielding": 2,
                    "core-dynamics-composites": 1,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 50,
                        "max": 100
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 39,
                        "max": 15
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 9,
                        "max": -10
                    }
                }
            }
        }
    },
    "power-plant-overcharged-power-plant": {
        "name": "Overcharged Power Plant",
        "module": "Power Plant",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "conductive-components": 1,
                    "chemical-distillery": 1
                },
                "effects": {
                    "power-capacity": {
                        "name": "Power Capacity",
                        "isPercent": true,
                        "min": 0,
                        "max": 5
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -11,
                        "max": 0
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "conductive-components": 2,
                    "selenium": 1,
                    "chemical-manipulators": 1,
                    "platinum": 1
                },
                "effects": {
                    "power-capacity": {
                        "name": "Power Capacity",
                        "isPercent": true,
                        "min": 1,
                        "max": 11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": -5
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 20,
                        "max": 4
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "conductive-components": 2,
                    "selenium": 2,
                    "chemical-manipulators": 2,
                    "emergency-power-cells": 1
                },
                "effects": {
                    "power-capacity": {
                        "name": "Power Capacity",
                        "isPercent": true,
                        "min": 3,
                        "max": 18
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -30,
                        "max": -11
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 29,
                        "max": 10
                    }
                }
            },
            "4": {
                "components": {
                    "heat-dispersion-plate": 1,
                    "conductive-ceramics": 2,
                    "cadmium": 2,
                    "pharmaceutical-isolators": 1,
                    "energy-grid-assembly": 1
                },
                "effects": {
                    "power-capacity": {
                        "name": "Power Capacity",
                        "isPercent": true,
                        "min": 5,
                        "max": 23
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -15
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 39,
                        "max": 14
                    }
                }
            },
            "5": {
                "components": {
                    "conductive-ceramics": 1,
                    "cadmium": 2,
                    "pharmaceutical-isolators": 2,
                    "energy-grid-assembly": 1
                },
                "effects": {
                    "power-capacity": {
                        "name": "Power Capacity",
                        "isPercent": true,
                        "min": 8,
                        "max": 29
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -50,
                        "max": -20
                    },
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 50,
                        "max": 20
                    }
                }
            }
        }
    },
    "power-plant-low-emissions-power-plant": {
        "name": "Low Emissions Power Plant",
        "module": "Power Plant",
        "recipes": {
            "1": {
                "components": {
                    "iron": 1,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "power-capacity": {
                        "name": "Power Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "iron": 2,
                    "irregular-emission-data": 2,
                    "heat-exchangers": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": -6,
                        "max": -20
                    },
                    "power-capacity": {
                        "name": "Power Capacity",
                        "isPercent": true,
                        "min": -12,
                        "max": -3
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 4
                    }
                }
            },
            "3": {
                "components": {
                    "iron": 1,
                    "irregular-emission-data": 2,
                    "heat-exchangers": 2,
                    "samarium": 1
                },
                "effects": {
                    "heat-efficiency": {
                        "name": "Heat Efficiency",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "power-capacity": {
                        "name": "Power Capacity",
                        "isPercent": true,
                        "min": -18,
                        "max": -6
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 14,
                        "max": 10
                    }
                }
            }
        }
    },
    "interdictor-expanded-fsd-interdictor-capture-arc": {
        "name": "Expanded FSD Interdictor Capture Arc",
        "module": "Interdictor",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "anomalous-fsd-telemetry": 1
                },
                "effects": {
                    "facing-limit": {
                        "name": "Facing Limit",
                        "isPercent": true,
                        "min": 0,
                        "max": 20
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": 0
                    },
                    "range": {
                        "name": "Range",
                        "isPercent": true,
                        "min": 11,
                        "max": 0
                    }
                }
            }
        }
    },
    "interdictor-longer-range-fsd-interdictor": {
        "name": "Longer Range FSD interdictor",
        "module": "Interdictor",
        "recipes": {
            "1": {
                "components": {
                    "iron": 2,
                    "tagged-encryption-codes": 1
                },
                "effects": {
                    "range": {
                        "name": "Range",
                        "isPercent": true,
                        "min": 0,
                        "max": 10
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": 0
                    },
                    "facing-limit": {
                        "name": "Facing Limit",
                        "isPercent": false,
                        "min": -11,
                        "max": 0
                    }
                }
            }
        }
    },
    "cell-banks-rapid-charge-shield-cell-bank": {
        "name": "Rapid Charge Shield Cell Bank",
        "module": "Cell Banks",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "spin-up-time": {
                        "name": "Spin Up Time",
                        "isPercent": true,
                        "min": 0,
                        "max": -10
                    },
                    "duration": {
                        "name": "Duration",
                        "isPercent": true,
                        "min": -10,
                        "max": 0
                    },
                    "shield-reinforcement": {
                        "name": "Shield Reinforcement",
                        "isPercent": true,
                        "min": 1,
                        "max": 2
                    },
                    "boot-time": {
                        "name": "Boot Time",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    }
                }
            }
        }
    },
    "cell-banks-specialised-shield-cell-bank": {
        "name": "Specialised Shield Cell Bank",
        "module": "Cell Banks",
        "recipes": {
            "1": {
                "components": {
                    "specialised-legacy-firmware": 2,
                    "conductive-components": 1,
                    "arsenic": 1
                },
                "effects": {
                    "boot-time": {
                        "name": "Boot Time",
                        "isPercent": true,
                        "min": 0,
                        "max": -9
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -10,
                        "max": 0
                    }
                }
            }
        }
    },
    "shield-generator-kinetic-resistant-shields": {
        "name": "Kinetic Resistant Shields",
        "module": "Shield Generator",
        "recipes": {
            "1": {
                "components": {
                    "distorted-shield-cycle-recordings": 2,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 6
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -6,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "distorted-shield-cycle-recordings": 2,
                    "modified-consumer-firmware": 2,
                    "zirconium": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 12
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -2
                    }
                }
            },
            "3": {
                "components": {
                    "distorted-shield-cycle-recordings": 1,
                    "modified-consumer-firmware": 1,
                    "selenium": 2,
                    "mercury": 1,
                    "micro-weave-cooling-hoses": null
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 18
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -18,
                        "max": -5
                    }
                }
            },
            "4": {
                "components": {
                    "untypical-shield-scans": 2,
                    "refined-focus-crystals": 2,
                    "ion-distributor": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 24
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -24,
                        "max": -7
                    }
                }
            },
            "5": {
                "components": {
                    "aberrant-shield-pattern-analysis": 2,
                    "exquisite-focus-crystals": 1,
                    "ion-distributor": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 6,
                        "max": 30
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -30,
                        "max": -10
                    }
                }
            }
        }
    },
    "shield-generator-enhanced-low-power-shields": {
        "name": "Enhanced, Low Power Shields",
        "module": "Shield Generator",
        "recipes": {
            "1": {
                "components": {
                    "distorted-shield-cycle-recordings": 2,
                    "germanium": 1,
                    "focus-crystals": 1
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": -6
                    },
                    "optimal-hull-mass": {
                        "name": "Optimal Hull Mass",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -5
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -10,
                        "max": -5
                    },
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "distorted-shield-cycle-recordings": 2,
                    "germanium": 2,
                    "focus-crystals": 2,
                    "micro-controllers": 1
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -2,
                        "max": -11
                    },
                    "optimal-hull-mass": {
                        "name": "Optimal Hull Mass",
                        "isPercent": true,
                        "min": -6,
                        "max": -1
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -2,
                        "max": -8
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": -10
                    },
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "distorted-shield-cycle-recordings": 1,
                    "germanium": 2,
                    "precipitated-alloys": 2,
                    "refined-focus-crystals": 1,
                    "power-transfer-bus": null
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -5,
                        "max": -15
                    },
                    "optimal-hull-mass": {
                        "name": "Optimal Hull Mass",
                        "isPercent": true,
                        "min": -9,
                        "max": -1
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -5,
                        "max": -12
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -31,
                        "max": -15
                    },
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": -3,
                        "max": 1
                    }
                }
            },
            "4": {
                "components": {
                    "inconsistent-shield-soak-analysis": 1,
                    "niobium": 2,
                    "thermic-alloys": 3,
                    "nanobreakers": 1
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -6,
                        "max": -20
                    },
                    "optimal-hull-mass": {
                        "name": "Optimal Hull Mass",
                        "isPercent": true,
                        "min": -13,
                        "max": -4
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -6,
                        "max": -16
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -20
                    },
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": -1,
                        "max": 3
                    }
                }
            },
            "5": {
                "components": {
                    "untypical-shield-scans": 2,
                    "tin": 2,
                    "military-grade-alloys": 2,
                    "platinum": 1
                },
                "effects": {
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -8,
                        "max": -25
                    },
                    "optimal-hull-mass": {
                        "name": "Optimal Hull Mass",
                        "isPercent": true,
                        "min": -16,
                        "max": -5
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -8,
                        "max": -20
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -50,
                        "max": -25
                    },
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": -1,
                        "max": 5
                    }
                }
            }
        }
    },
    "shield-generator-reinforced-shields": {
        "name": "Reinforced Shields",
        "module": "Shield Generator",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 1,
                    "conductive-components": 2
                },
                "effects": {
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": 0,
                        "max": 4
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 2
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 3
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 1
                    },
                    "broken-regen-rate": {
                        "name": "Broken Regen Rate",
                        "isPercent": true,
                        "min": -21,
                        "max": 15
                    },
                    "regen-rate": {
                        "name": "Regen Rate",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "phosphorus": 2,
                    "conductive-components": 2,
                    "mechanical-components": 1,
                    "modular-terminals": 1
                },
                "effects": {
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": 1,
                        "max": 10
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 4
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 8
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 3
                    },
                    "broken-regen-rate": {
                        "name": "Broken Regen Rate",
                        "isPercent": true,
                        "min": -24,
                        "max": 12
                    },
                    "regen-rate": {
                        "name": "Regen Rate",
                        "isPercent": true,
                        "min": -6,
                        "max": -5
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "phosphorus": 1,
                    "conductive-components": 2,
                    "mechanical-components": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": 3,
                        "max": 14
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 6
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 11
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 4
                    },
                    "broken-regen-rate": {
                        "name": "Broken Regen Rate",
                        "isPercent": true,
                        "min": -27,
                        "max": 10
                    },
                    "regen-rate": {
                        "name": "Regen Rate",
                        "isPercent": true,
                        "min": -10,
                        "max": -3
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "manganese": 1,
                    "conductive-ceramics": 2,
                    "configurable-components": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": 5,
                        "max": 19
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 8
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 7,
                        "max": 15
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 3,
                        "max": 6
                    },
                    "broken-regen-rate": {
                        "name": "Broken Regen Rate",
                        "isPercent": true,
                        "min": -31,
                        "max": -6
                    },
                    "regen-rate": {
                        "name": "Regen Rate",
                        "isPercent": true,
                        "min": -12,
                        "max": -2
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 4
                    }
                }
            },
            "5": {
                "components": {
                    "arsenic": 1,
                    "conductive-polymers": 2,
                    "improvised-components": 1,
                    "ion-distributor": 1
                },
                "effects": {
                    "optimal-strength": {
                        "name": "Optimal Strength",
                        "isPercent": true,
                        "min": 8,
                        "max": 25
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 9
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 18
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 7
                    },
                    "broken-regen-rate": {
                        "name": "Broken Regen Rate",
                        "isPercent": true,
                        "min": -34,
                        "max": -3
                    },
                    "regen-rate": {
                        "name": "Regen Rate",
                        "isPercent": true,
                        "min": -15,
                        "max": -1
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": 10
                    }
                }
            }
        }
    },
    "shield-generator-thermal-resistant-shields": {
        "name": "Thermal Resistant Shields",
        "module": "Shield Generator",
        "recipes": {
            "1": {
                "components": {
                    "distorted-shield-cycle-recordings": 2,
                    "germanium": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 12
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -3,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "distorted-shield-cycle-recordings": 2,
                    "germanium": 2,
                    "zirconium": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 24
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -6,
                        "max": -1
                    }
                }
            },
            "3": {
                "components": {
                    "distorted-shield-cycle-recordings": 1,
                    "germanium": 1,
                    "selenium": 2,
                    "mercury": 1,
                    "micro-weave-cooling-hoses": null
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 7,
                        "max": 36
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -9,
                        "max": -2
                    }
                }
            },
            "4": {
                "components": {
                    "untypical-shield-scans": 2,
                    "refined-focus-crystals": 2,
                    "ion-distributor": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 48
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -4
                    }
                }
            },
            "5": {
                "components": {
                    "aberrant-shield-pattern-analysis": 2,
                    "exquisite-focus-crystals": 1,
                    "ion-distributor": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 12,
                        "max": 60
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -15,
                        "max": -5
                    }
                }
            }
        }
    },
    "hull-reinforcement-light-weight-hull-reinforcement": {
        "name": "Light Weight Hull Reinforcement",
        "module": "Hull Reinforcement",
        "recipes": {
            "1": {
                "components": {
                    "iron": 2,
                    "conductive-components": 1,
                    "high-density-composites": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": false,
                        "min": 0,
                        "max": 3
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -3
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": true,
                        "min": 6,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "iron": 1,
                    "conductive-components": 2,
                    "high-density-composites": 2,
                    "thermic-alloys": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 2,
                        "max": 6
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -6
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": true,
                        "min": -10,
                        "max": -6
                    }
                }
            },
            "3": {
                "components": {
                    "iron": 1,
                    "conductive-components": 3,
                    "high-density-composites": 2,
                    "thermic-alloys": 2,
                    "telemetry-suite": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 4,
                        "max": 8
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -10
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": true,
                        "min": -15,
                        "max": -10
                    }
                }
            },
            "4": {
                "components": {
                    "germanium": 2,
                    "conductive-ceramics": 3,
                    "proprietary-composites": 2,
                    "military-grade-alloys": 1,
                    "hardware-diagnostic-sensor": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 6,
                        "max": 12
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -12
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": true,
                        "min": -20,
                        "max": -15
                    }
                }
            },
            "5": {
                "components": {
                    "conductive-ceramics": 2,
                    "tin": 3,
                    "military-grade-alloys": 2,
                    "hardware-diagnostic-sensor": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 8,
                        "max": 15
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -15
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": true,
                        "min": -25,
                        "max": -20
                    }
                }
            }
        }
    },
    "hull-reinforcement-blast-resistant-hull-reinforcement": {
        "name": "Blast Resistant Hull Reinforcement",
        "module": "Hull Reinforcement",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 8
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -4,
                        "max": -2
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -4,
                        "max": -2
                    }
                }
            },
            "2": {
                "components": {
                    "carbon": 2,
                    "zinc": 2,
                    "high-density-composites": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 16
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -8,
                        "max": -4
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -8,
                        "max": -4
                    }
                }
            },
            "3": {
                "components": {
                    "carbon": 1,
                    "zinc": 1,
                    "zirconium": 2,
                    "proprietary-composites": 1,
                    "osmium": 1
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 15,
                        "max": 24
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -6
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -6
                    }
                }
            }
        }
    },
    "hull-reinforcement-heavy-duty-hull-reinforcement": {
        "name": "Heavy Duty Hull Reinforcement",
        "module": "Hull Reinforcement",
        "recipes": {
            "1": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 2
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 8,
                        "max": 0
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": false,
                        "min": 0,
                        "max": 10
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 3
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 3
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 3
                    }
                }
            },
            "2": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 2,
                    "high-density-composites": 2,
                    "articulation-motors": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 15,
                        "max": 4
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": false,
                        "min": 5,
                        "max": 20
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 6
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 6
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 6
                    }
                }
            },
            "3": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 3,
                    "high-density-composites": 3,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 23,
                        "max": 10
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": true,
                        "min": 10,
                        "max": 31
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 9
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 9
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 9
                    }
                }
            },
            "4": {
                "components": {
                    "vanadium": 1,
                    "shielding-sensors": 3,
                    "proprietary-composites": 2,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 31,
                        "max": 14
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": true,
                        "min": 14,
                        "max": 39
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 3,
                        "max": 12
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 3,
                        "max": 12
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 3,
                        "max": 12
                    }
                }
            },
            "5": {
                "components": {
                    "tungsten": 1,
                    "compound-shielding": 2,
                    "core-dynamics-composites": 2,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 39,
                        "max": 20
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 15
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 15
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 15
                    }
                }
            }
        }
    },
    "hull-reinforcement-kinetic-resistant-hull-reinforcement": {
        "name": "Kinetic Resistant Hull Reinforcement",
        "module": "Hull Reinforcement",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 8
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -4,
                        "max": -2
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -4,
                        "max": -2
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "vanadium": 2,
                    "tungsten": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 16
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -8,
                        "max": -4
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -8,
                        "max": -4
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "vanadium": 1,
                    "high-density-composites": 2,
                    "molybdenum": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 15,
                        "max": 24
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -6
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -6
                    }
                }
            }
        }
    },
    "hull-reinforcement-thermal-resistant-hull-reinforcement": {
        "name": "Thermal Resistant Hull Reinforcement",
        "module": "Hull Reinforcement",
        "recipes": {
            "1": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "vanadium": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 8
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -4,
                        "max": -2
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -4,
                        "max": -2
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "heat-dispersion-plate": 2,
                    "tungsten": 1,
                    "neofabric-insulation": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 16
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -8,
                        "max": -4
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -8,
                        "max": -4
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "zinc": 1,
                    "heat-exchangers": 2,
                    "molybdenum": 1,
                    "bromellite": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 15,
                        "max": 24
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -6
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -6
                    }
                }
            }
        }
    },
    "mine-launcher-high-capacity-magazine": {
        "name": "High Capacity Magazine",
        "module": "Mine Launcher",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 1,
                    "electrochemical-arrays": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 34
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 8,
                        "max": 58
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 25,
                        "max": 10
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 20,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            },
            "2": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 2,
                    "niobium": 1,
                    "polymer-capacitors": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 66
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 19,
                        "max": 69
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 20
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 39,
                        "max": 10
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 14
                    }
                }
            },
            "3": {
                "components": {
                    "mechanical-scrap": 1,
                    "vanadium": 3,
                    "niobium": 2,
                    "polymer-capacitors": 1,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 66
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 28,
                        "max": 77
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 75,
                        "max": 29
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 61,
                        "max": 20
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 29,
                        "max": 20
                    }
                }
            },
            "4": {
                "components": {
                    "mechanical-equipment": 1,
                    "high-density-composites": 3,
                    "tin": 1,
                    "military-supercapacitors": 1,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 38,
                        "max": 88
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 39
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 79,
                        "max": 29
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 35,
                        "max": 25
                    }
                }
            }
        }
    },
    "mine-launcher-rapid-fire-modification": {
        "name": "Rapid Fire Modification",
        "module": "Mine Launcher",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -22,
                        "max": 4
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 5,
                        "max": 25
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -25,
                        "max": -16
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "mechanical-scrap": 3,
                    "heat-dispersion-plate": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -12,
                        "max": 17
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 11,
                        "max": 34
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -20,
                        "max": -12
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "specialised-legacy-firmware": 2,
                    "mechanical-equipment": 2,
                    "precipitated-alloys": 1,
                    "molybdenum": 1,
                    "osmium": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 0,
                        "max": 31
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 17,
                        "max": 42
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -15,
                        "max": -8
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 10
                    }
                }
            },
            "4": {
                "components": {
                    "modified-consumer-firmware": 1,
                    "mechanical-components": 1,
                    "thermic-alloys": 2,
                    "technetium": 1,
                    "telemetry-suite": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 12,
                        "max": 47
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 25,
                        "max": 53
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -11,
                        "max": -5
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 4,
                        "max": 20
                    }
                }
            }
        }
    },
    "mine-launcher-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Mine Launcher",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -31,
                        "max": -10
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "manganese": 1,
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -20,
                        "max": -50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -50,
                        "max": -31
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    }
                }
            }
        }
    },
    "mine-launcher-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Mine Launcher",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "zinc": 2,
                    "shielding-sensors": 2,
                    "molybdenum": 1,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 150,
                        "max": 100
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 75
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 15
                    }
                }
            },
            "4": {
                "components": {
                    "high-density-composites": 2,
                    "molybdenum": 2,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 200,
                        "max": 150
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 39,
                        "max": 100
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 10,
                        "max": 31
                    }
                }
            }
        }
    },
    "seeker-missile-rack-high-capacity-magazine": {
        "name": "High Capacity Magazine",
        "module": "Seeker Missile Rack",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 1,
                    "electrochemical-arrays": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 50
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 0,
                        "max": 50
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 25,
                        "max": 10
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 20,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            },
            "2": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 2,
                    "niobium": 1,
                    "polymer-capacitors": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 17,
                        "max": 66
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 17,
                        "max": 66
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 20
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 39,
                        "max": 10
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 14
                    }
                }
            },
            "3": {
                "components": {
                    "mechanical-scrap": 1,
                    "vanadium": 3,
                    "niobium": 2,
                    "polymer-capacitors": 1,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 17,
                        "max": 66
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 28,
                        "max": 77
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 75,
                        "max": 29
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 61,
                        "max": 20
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 29,
                        "max": 20
                    }
                }
            },
            "4": {
                "components": {
                    "mechanical-equipment": 1,
                    "high-density-composites": 3,
                    "tin": 1,
                    "military-supercapacitors": 1,
                    "reinforced-mounting-plate": 1,
                    "mechanical-components": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 34,
                        "max": 83
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 38,
                        "max": 88
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 39
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 79,
                        "max": 29
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 35,
                        "max": 25
                    }
                }
            }
        }
    },
    "seeker-missile-rack-rapid-fire-modification": {
        "name": "Rapid Fire Modification",
        "module": "Seeker Missile Rack",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -22,
                        "max": 4
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 5,
                        "max": 25
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -25,
                        "max": -16
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "mechanical-scrap": 3,
                    "heat-dispersion-plate": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -12,
                        "max": 17
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 11,
                        "max": 34
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -20,
                        "max": -12
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "specialised-legacy-firmware": 2,
                    "mechanical-equipment": 2,
                    "precipitated-alloys": 1,
                    "molybdenum": 1,
                    "osmium": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 0,
                        "max": 31
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 17,
                        "max": 42
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -15,
                        "max": -8
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 10
                    }
                }
            },
            "4": {
                "components": {
                    "modified-consumer-firmware": 1,
                    "mechanical-components": 1,
                    "thermic-alloys": 2,
                    "technetium": 1,
                    "telemetry-suite": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 12,
                        "max": 47
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 25,
                        "max": 53
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -11,
                        "max": -5
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 4,
                        "max": 20
                    }
                }
            }
        }
    },
    "seeker-missile-rack-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Seeker Missile Rack",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -31,
                        "max": -10
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "manganese": 1,
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -20,
                        "max": -50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -50,
                        "max": -31
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    }
                }
            }
        }
    },
    "seeker-missile-rack-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Seeker Missile Rack",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "zinc": 2,
                    "shielding-sensors": 2,
                    "molybdenum": 1,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 150,
                        "max": 100
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 75
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 15
                    }
                }
            },
            "4": {
                "components": {
                    "high-density-composites": 2,
                    "molybdenum": 2,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 200,
                        "max": 100
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 39,
                        "max": 100
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 10,
                        "max": 31
                    }
                }
            }
        }
    },
    "armour-light-weight-armour": {
        "name": "Light Weight Armour",
        "module": "Armour",
        "recipes": {
            "1": {
                "components": {
                    "iron": 2,
                    "conductive-components": 1,
                    "high-density-composites": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": false,
                        "min": -1,
                        "max": 0
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 2
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 2
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 3
                    }
                }
            }
        }
    },
    "armour-blast-resistant-armour": {
        "name": "Blast Resistant Armour",
        "module": "Armour",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 7,
                        "max": 12
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -5,
                        "max": -2
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 2
                    }
                }
            }
        }
    },
    "armour-heavy-duty-armour": {
        "name": "Heavy Duty Armour",
        "module": "Armour",
        "recipes": {
            "1": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 2
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": false,
                        "min": 0,
                        "max": 5
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 1
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 1
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 1
                    }
                }
            }
        }
    },
    "armour-kinetic-resistant-armour": {
        "name": "Kinetic Resistant Armour",
        "module": "Armour",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 6,
                        "max": 10
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -4,
                        "max": -2
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 6,
                        "max": 3
                    }
                }
            }
        }
    },
    "armour-thermal-resistant-armour": {
        "name": "Thermal Resistant Armour",
        "module": "Armour",
        "recipes": {
            "1": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "vanadium": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 8
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -6,
                        "max": -3
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 2
                    }
                }
            }
        }
    },
    "torpedo-pylon-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Torpedo Pylon",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -31,
                        "max": -10
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "manganese": 1,
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -20,
                        "max": -50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -50,
                        "max": -30
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -4,
                        "max": 0
                    }
                }
            }
        }
    },
    "torpedo-pylon-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Torpedo Pylon",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "zinc": 2,
                    "shielding-sensors": 2,
                    "molybdenum": 1,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 150,
                        "max": 100
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 75
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 14
                    }
                }
            },
            "4": {
                "components": {
                    "high-density-composites": 2,
                    "molybdenum": 2,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 200,
                        "max": 150
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 40,
                        "max": 100
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 10,
                        "max": 29
                    }
                }
            }
        }
    },
    "cannon-efficient-weapon": {
        "name": "Efficient Weapon",
        "module": "Cannon",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -11,
                        "max": -50
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -24,
                        "max": -3
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 20,
                        "max": 8
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -6,
                        "max": 4
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -6,
                        "max": 4
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2,
                    "heat-exchangers": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -20,
                        "max": -61
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -21,
                        "max": 0
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 17,
                        "max": 6
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 5
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    }
                }
            }
        }
    },
    "cannon-high-capacity-magazine": {
        "name": "High Capacity Magazine",
        "module": "Cannon",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 1,
                    "electrochemical-arrays": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 61
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 10,
                        "max": 59
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 25,
                        "max": 10
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 20,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            },
            "2": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 2,
                    "niobium": 1,
                    "polymer-capacitors": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 20,
                        "max": 61
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 19,
                        "max": 69
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 20
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 39,
                        "max": 10
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 14
                    }
                }
            }
        }
    },
    "cannon-long-range-weapon": {
        "name": "Long Range Weapon",
        "module": "Cannon",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 10,
                        "max": 19
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -5,
                        "max": -3
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 6,
                        "max": 3
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": false,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 2,
                    "modified-consumer-firmware": 2,
                    "focus-crystals": 1,
                    "insulating-membrane": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 19,
                        "max": 39
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -11,
                        "max": -6
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 11,
                        "max": 6
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 4
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 20,
                        "max": 4
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": false,
                        "min": 4,
                        "max": 0
                    }
                }
            }
        }
    },
    "cannon-short-range-blaster": {
        "name": "Short Range Blaster",
        "module": "Cannon",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -36,
                        "max": -11
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 3,
                        "max": 8
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 3,
                        "max": 8
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": -10
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 2,
                    "electrochemical-arrays": 1,
                    "insulating-membrane": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -45,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 8,
                        "max": 15
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 8,
                        "max": 15
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": -6
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            }
        }
    },
    "cannon-overcharged-weapon": {
        "name": "Overcharged Weapon",
        "module": "Cannon",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 1,
                    "hybrid-capacitors": 1,
                    "cracked-industrial-firmware": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 1,
                        "max": 14
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 10,
                        "max": 14
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 89,
                        "max": 45
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -8,
                        "max": 0
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": false,
                        "min": 45,
                        "max": 29
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 1,
                    "security-firmware-patch": 1,
                    "praseodymium": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 8,
                        "max": 26
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 14,
                        "max": 20
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 81,
                        "max": 39
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -6,
                        "max": 5
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": false,
                        "min": 29,
                        "max": 14
                    }
                }
            }
        }
    },
    "frag-cannon-double-shot": {
        "name": "Double Shot",
        "module": "Frag Cannon",
        "recipes": {
            "1": {
                "components": {
                    "carbon": 2,
                    "mechanical-equipment": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 34
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 28,
                        "max": 45
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 28,
                        "max": 45
                    },
                    "burst-size": {
                        "name": "Burst Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 1
                    },
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -25,
                        "max": -10
                    }
                }
            },
            "2": {
                "components": {
                    "carbon": 2,
                    "mechanical-equipment": 2,
                    "cracked-industrial-firmware": 1,
                    "micro-controllers": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 34
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 32,
                        "max": 48
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 32,
                        "max": 48
                    },
                    "burst-size": {
                        "name": "Burst Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 1
                    },
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -20,
                        "max": -8
                    }
                }
            },
            "3": {
                "components": {
                    "carbon": 1,
                    "mechanical-equipment": 1,
                    "cracked-industrial-firmware": 1,
                    "mercury": 1,
                    "osmium": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 34,
                        "max": 100
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 37,
                        "max": 50
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 37,
                        "max": 50
                    },
                    "burst-size": {
                        "name": "Burst Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 1
                    },
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -15,
                        "max": -6
                    }
                }
            },
            "4": {
                "components": {
                    "vanadium": 2,
                    "mechanical-components": 2,
                    "security-firmware-patch": 1,
                    "ruthenium": 1,
                    "osmium": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 100
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 40,
                        "max": 52
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 40,
                        "max": 52
                    },
                    "burst-size": {
                        "name": "Burst Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 1
                    },
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -10,
                        "max": -4
                    }
                }
            }
        }
    },
    "frag-cannon-efficient-weapon": {
        "name": "Efficient Weapon",
        "module": "Frag Cannon",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -11,
                        "max": -50
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -25,
                        "max": -3
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -20,
                        "max": -8
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -6,
                        "max": 4
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2,
                    "heat-exchangers": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -20,
                        "max": -61
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -21,
                        "max": 0
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -17,
                        "max": -6
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 5
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "chromium": 2,
                    "heat-exchangers": 2,
                    "samarium": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -16,
                        "max": 2
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -14,
                        "max": -4
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -4,
                        "max": 7
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -6,
                        "max": -10
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": -6,
                        "max": -21
                    }
                }
            },
            "4": {
                "components": {
                    "heat-dispersion-plate": 1,
                    "selenium": 2,
                    "heat-vanes": 1,
                    "heatsink-interlink": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -40,
                        "max": -80
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -11,
                        "max": 5
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -10,
                        "max": -2
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -3,
                        "max": 8
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -11,
                        "max": -30
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    }
                }
            }
        }
    },
    "frag-cannon-high-capacity-magazine": {
        "name": "High Capacity Magazine",
        "module": "Frag Cannon",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 1,
                    "electrochemical-arrays": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 34
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 10,
                        "max": 61
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 25,
                        "max": 10
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 20,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            },
            "2": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 2,
                    "niobium": 1,
                    "polymer-capacitors": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 66
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 20,
                        "max": 70
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 20
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 39,
                        "max": 10
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 14
                    }
                }
            },
            "3": {
                "components": {
                    "mechanical-scrap": 1,
                    "vanadium": 3,
                    "niobium": 2,
                    "polymer-capacitors": 1,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 66
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 28,
                        "max": 81
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 75,
                        "max": 29
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 61,
                        "max": 20
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 31,
                        "max": 20
                    }
                }
            },
            "4": {
                "components": {
                    "mechanical-equipment": 1,
                    "high-density-composites": 3,
                    "tin": 1,
                    "military-supercapacitors": 1,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 34,
                        "max": 66
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 39,
                        "max": 90
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 39
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 81,
                        "max": 31
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 35,
                        "max": 25
                    }
                }
            }
        }
    },
    "frag-cannon-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Frag Cannon",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -31,
                        "max": -10
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "manganese": 1,
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -20,
                        "max": -50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -4,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -50,
                        "max": -31
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    }
                }
            }
        }
    },
    "frag-cannon-overcharged-weapon": {
        "name": "Overcharged Weapon",
        "module": "Frag Cannon",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 1,
                    "hybrid-capacitors": 1,
                    "cracked-industrial-firmware": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 1,
                        "max": 14
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 10,
                        "max": 14
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 89,
                        "max": 45
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -8,
                        "max": 0
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 45,
                        "max": 31
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 1,
                    "security-firmware-patch": 1,
                    "praseodymium": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 8,
                        "max": 26
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 14,
                        "max": 19
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 79,
                        "max": 39
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -6,
                        "max": 5
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 31,
                        "max": 14
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 2,
                    "security-firmware-patch": 2,
                    "articulation-motors": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 15,
                        "max": 38
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 19,
                        "max": 25
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 69,
                        "max": 34
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -4,
                        "max": 11
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 14,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "zinc": 1,
                    "conductive-ceramics": 2,
                    "polymer-capacitors": 2,
                    "modified-embedded-firmware": 1,
                    "articulation-motors": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 22,
                        "max": 52
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 25,
                        "max": 29
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 59,
                        "max": 29
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -2,
                        "max": 17
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 0,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            }
        }
    },
    "frag-cannon-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Frag Cannon",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 2
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "zinc": 2,
                    "shielding-sensors": 2,
                    "molybdenum": 1,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 150,
                        "max": 100
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 75
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 14
                    }
                }
            },
            "4": {
                "components": {
                    "high-density-composites": 2,
                    "molybdenum": 2,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 200,
                        "max": 150
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 39,
                        "max": 100
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 10,
                        "max": 31
                    }
                }
            }
        }
    },
    "multi-cannon-efficient-weapon": {
        "name": "Efficient Weapon",
        "module": "Multi-Cannon",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -11,
                        "max": 50
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -25,
                        "max": -3
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -20,
                        "max": -8
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -6,
                        "max": 4
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2,
                    "heat-exchangers": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -20,
                        "max": -61
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -21,
                        "max": 0
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -17,
                        "max": -6
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -4,
                        "max": 5
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "chromium": 2,
                    "heat-exchangers": 2,
                    "samarium": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -16,
                        "max": 2
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -14,
                        "max": -4
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -3,
                        "max": 7
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -6,
                        "max": -20
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": -6,
                        "max": -20
                    }
                }
            },
            "4": {
                "components": {
                    "heat-dispersion-plate": 1,
                    "selenium": 2,
                    "heat-vanes": 1,
                    "heatsink-interlink": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -40,
                        "max": -80
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -11,
                        "max": -5
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 10,
                        "max": 2
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 8
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    }
                }
            },
            "5": {
                "components": {
                    "precipitated-alloys": 1,
                    "cadmium": 2,
                    "proto-heat-radiators": 1,
                    "heatsink-interlink": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -50,
                        "max": -90
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -6,
                        "max": 9
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 5,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -1,
                        "max": 9
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -15,
                        "max": -40
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": -15,
                        "max": -41
                    }
                }
            }
        }
    },
    "multi-cannon-high-capacity-magazine": {
        "name": "High Capacity Magazine",
        "module": "Multi-Cannon",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 2,
                    "electrochemical-arrays": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 10,
                        "max": 61
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 10,
                        "max": 61
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 25,
                        "max": 10
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 20,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            },
            "2": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 2,
                    "niobium": 1,
                    "polymer-capacitors": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 20,
                        "max": 70
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 19,
                        "max": 69
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 20
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 39,
                        "max": 10
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 14
                    }
                }
            },
            "3": {
                "components": {
                    "mechanical-scrap": 1,
                    "vanadium": 3,
                    "niobium": 2,
                    "polymer-capacitors": 1,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 28,
                        "max": 81
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 29,
                        "max": 79
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 75,
                        "max": 29
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 61,
                        "max": 20
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 29,
                        "max": 20
                    }
                }
            },
            "4": {
                "components": {
                    "mechanical-equipment": 1,
                    "high-density-composites": 3,
                    "tin": 1,
                    "military-supercapacitors": 1,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 39,
                        "max": 90
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 39,
                        "max": 89
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 39
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 81,
                        "max": 31
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 35,
                        "max": 25
                    }
                }
            },
            "5": {
                "components": {
                    "mechanical-components": 1,
                    "proprietary-composites": 2,
                    "military-supercapacitors": 2,
                    "reinforced-mounting-plate": 2
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 50,
                        "max": 100
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 50,
                        "max": 100
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 125,
                        "max": 50
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 100,
                        "max": 39
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 39,
                        "max": 29
                    }
                }
            }
        }
    },
    "multi-cannon-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Multi-Cannon",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -31,
                        "max": -10
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "manganese": 1,
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -20,
                        "max": -50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": null,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -50,
                        "max": -30
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    }
                }
            },
            "5": {
                "components": {
                    "conductive-polymers": 2,
                    "proto-radiolic-alloys": 1,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -40,
                        "max": -90
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -61,
                        "max": -40
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 5,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    }
                }
            }
        }
    },
    "multi-cannon-overcharged-weapon": {
        "name": "Overcharged Weapon",
        "module": "Multi-Cannon",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 1,
                    "hybrid-capacitors": 1,
                    "cracked-industrial-firmware": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 1,
                        "max": 14
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 10,
                        "max": 14
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 86,
                        "max": 45
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -8,
                        "max": 0
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 44,
                        "max": 29
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 1,
                    "security-firmware-patch": 1,
                    "praseodymium": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 8,
                        "max": 26
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 14,
                        "max": 20
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 81,
                        "max": 40
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -6,
                        "max": 5
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 29,
                        "max": 14
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 2,
                    "security-firmware-patch": 2,
                    "articulation-motors": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 15,
                        "max": 38
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 20,
                        "max": 25
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 70,
                        "max": 35
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -4,
                        "max": 11
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 14,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "zinc": 1,
                    "conductive-ceramics": 2,
                    "polymer-capacitors": 2,
                    "modified-embedded-firmware": 1,
                    "articulation-motors": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 22,
                        "max": 52
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 25,
                        "max": 29
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 61,
                        "max": 29
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -2,
                        "max": 17
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 0,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "5": {
                "components": {
                    "zirconium": 2,
                    "conductive-polymers": 2,
                    "modified-embedded-firmware": 2,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 29,
                        "max": 68
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 29,
                        "max": 35
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 50,
                        "max": 25
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 0,
                        "max": 25
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 0,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            }
        }
    },
    "multi-cannon-short-range-blaster": {
        "name": "Short Range Blaster",
        "module": "Multi-Cannon",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -35,
                        "max": -10
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 3,
                        "max": 7
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 3,
                        "max": 8
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": -10
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 2,
                    "electrochemical-arrays": 1,
                    "insulating-membrane": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -45,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 7,
                        "max": 15
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 8,
                        "max": 15
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 15,
                        "max": -6
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "modified-consumer-firmware": 2,
                    "electrochemical-arrays": 1,
                    "conductive-polymers": 1,
                    "neofabric-insulation": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -55,
                        "max": -30
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 11,
                        "max": 23
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 11,
                        "max": 23
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 29,
                        "max": 20
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": -10
                    }
                }
            },
            "4": {
                "components": {
                    "modified-consumer-firmware": 1,
                    "electrochemical-arrays": 2,
                    "conductive-polymers": 2,
                    "platinum": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -65,
                        "max": -40
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 15,
                        "max": 32
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 15,
                        "max": 31
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 4
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 39,
                        "max": 29
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -30,
                        "max": -20
                    }
                }
            },
            "5": {
                "components": {
                    "security-firmware-patch": 2,
                    "improvised-components": 1,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -75,
                        "max": -50
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 20,
                        "max": 39
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 20,
                        "max": 39
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 29,
                        "max": 10
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 50,
                        "max": 39
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -30
                    }
                }
            }
        }
    },
    "multi-cannon-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Multi-Cannon",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "zinc": 2,
                    "shielding-sensors": 2,
                    "molybdenum": 1,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 150,
                        "max": 100
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 75
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 14
                    }
                }
            },
            "4": {
                "components": {
                    "high-density-composites": 2,
                    "molybdenum": 2,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 200,
                        "max": 150
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 40,
                        "max": 100
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 10,
                        "max": 29
                    }
                }
            },
            "5": {
                "components": {
                    "proprietary-composites": 2,
                    "technetium": 1,
                    "radiation-baffle": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 250,
                        "max": 200
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 50,
                        "max": 125
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 20,
                        "max": 45
                    }
                }
            }
        }
    },
    "rail-gun-high-capacity-magazine": {
        "name": "High Capacity Magazine",
        "module": "Rail Gun",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 1,
                    "electrochemical-arrays": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 10,
                        "max": 61
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 25,
                        "max": 10
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 20,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            },
            "2": {
                "components": {
                    "mechanical-scrap": 2,
                    "vanadium": 2,
                    "niobium": 1,
                    "polymer-capacitors": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "ammo-clip-size": {
                        "name": "Ammo Clip Size",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "ammo-maximum": {
                        "name": "Ammo Maximum",
                        "isPercent": true,
                        "min": 20,
                        "max": 70
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 20
                    },
                    "reload-time": {
                        "name": "Reload Time",
                        "isPercent": true,
                        "min": 39,
                        "max": 10
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 25,
                        "max": 14
                    }
                }
            }
        }
    },
    "rail-gun-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Rail Gun",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 1,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -30,
                        "max": -11
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            }
        }
    },
    "rail-gun-long-range-weapon": {
        "name": "Long Range Weapon",
        "module": "Rail Gun",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 10,
                        "max": 20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -6,
                        "max": -3
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 6,
                        "max": 3
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 2,
                    "modified-consumer-firmware": 2,
                    "focus-crystals": 1,
                    "insulating-membrane": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 20,
                        "max": 39
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -10,
                        "max": -6
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 10,
                        "max": 6
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 4
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 20,
                        "max": 4
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    }
                }
            }
        }
    },
    "rail-gun-short-range-blaster": {
        "name": "Short Range Blaster",
        "module": "Rail Gun",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -36,
                        "max": -11
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 4,
                        "max": 8
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 4,
                        "max": 8
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": -11
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 2,
                    "electrochemical-arrays": 1,
                    "insulating-membrane": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -45,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 8,
                        "max": 15
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 8,
                        "max": 15
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": -5
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            }
        }
    },
    "rail-gun-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Rail Gun",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    }
                }
            }
        }
    },
    "cargo-rack-corrosion-resistant": {
        "name": "Corrosion Resistant",
        "module": "Cargo Rack",
        "recipes": {
            "1": {
                "components": {},
                "effects": {
                    "capacity": {
                        "name": "Capacity",
                        "isPercent": false,
                        "min": 1,
                        "max": 1
                    }
                }
            },
            "2": {
                "components": {},
                "effects": {
                    "capacity": {
                        "name": "Capacity",
                        "isPercent": false,
                        "min": 2,
                        "max": 2
                    }
                }
            }
        }
    },
    "distributor-high-charge-capacity-power-distributor": {
        "name": "High Charge Capacity Power Distributor",
        "module": "Distributor",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "zinc": 1,
                    "electrochemical-arrays": 1
                },
                "effects": {
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": 0,
                        "max": 4
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": 0,
                        "max": 4
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": 0,
                        "max": 4
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "specialised-legacy-firmware": 2,
                    "chromium": 2,
                    "high-density-composites": 1,
                    "polymer-capacitors": 1,
                    "platinum": 1
                },
                "effects": {
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": 3,
                        "max": 10
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": 3,
                        "max": 10
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": 3,
                        "max": 10
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -11,
                        "max": -5
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -11,
                        "max": -5
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -11,
                        "max": -5
                    }
                }
            },
            "3": {
                "components": {
                    "specialised-legacy-firmware": 1,
                    "chromium": 3,
                    "high-density-composites": 2,
                    "polymer-capacitors": 2,
                    "modular-terminals": 1
                },
                "effects": {
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": 8,
                        "max": 14
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": 8,
                        "max": 14
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": 8,
                        "max": 14
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -15,
                        "max": -8
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -15,
                        "max": -8
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -15,
                        "max": -8
                    }
                }
            },
            "4": {
                "components": {
                    "modified-consumer-firmware": 2,
                    "selenium": 2,
                    "proprietary-composites": 2,
                    "military-supercapacitors": 1,
                    "modular-terminals": 1
                },
                "effects": {
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": 11,
                        "max": 20
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": 11,
                        "max": 20
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": 11,
                        "max": 20
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -20,
                        "max": -12
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -20,
                        "max": -12
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -20,
                        "max": -12
                    }
                }
            },
            "5": {
                "components": {
                    "cracked-industrial-firmware": 2,
                    "proprietary-composites": 2,
                    "military-supercapacitors": 2,
                    "emergency-power-cells": 1
                },
                "effects": {
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": 17,
                        "max": 25
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": 17,
                        "max": 25
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": 17,
                        "max": 25
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -25,
                        "max": -16
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -25,
                        "max": -16
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -25,
                        "max": -16
                    }
                }
            }
        }
    },
    "distributor-charge-enhanced-power-distributor": {
        "name": "Charge Enhanced Power Distributor",
        "module": "Distributor",
        "recipes": {
            "1": {
                "components": {
                    "specialised-legacy-firmware": 2,
                    "chemical-processors": 2
                },
                "effects": {
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": 0,
                        "max": 5
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": 0,
                        "max": 5
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": 0,
                        "max": 5
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "specialised-legacy-firmware": 2,
                    "chemical-processors": 2,
                    "focus-crystals": 1,
                    "nanobreakers": 1
                },
                "effects": {
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": 3,
                        "max": 12
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": 3,
                        "max": 12
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": 3,
                        "max": 12
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": -1
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": -1
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": -1
                    }
                }
            },
            "3": {
                "components": {
                    "grid-resistors": 1,
                    "modified-consumer-firmware": 2,
                    "chemical-distillery": 2,
                    "refined-focus-crystals": 1,
                    "praseodymium": 1
                },
                "effects": {
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": 8,
                        "max": 18
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": 8,
                        "max": 18
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": 8,
                        "max": 18
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -9,
                        "max": -2
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -9,
                        "max": -2
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -9,
                        "max": -2
                    }
                }
            },
            "4": {
                "components": {
                    "hybrid-capacitors": 1,
                    "cracked-industrial-firmware": 2,
                    "chemical-manipulators": 2,
                    "exquisite-focus-crystals": 1,
                    "ion-distributor": 1
                },
                "effects": {
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": 12,
                        "max": 23
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": 12,
                        "max": 23
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": 12,
                        "max": 23
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -12,
                        "max": -3
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -12,
                        "max": -3
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -12,
                        "max": -3
                    }
                }
            },
            "5": {
                "components": {
                    "cracked-industrial-firmware": 3,
                    "chemical-manipulators": 2,
                    "exquisite-focus-crystals": 2,
                    "ion-distributor": 1
                },
                "effects": {
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": 17,
                        "max": 29
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": 17,
                        "max": 29
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": 17,
                        "max": 29
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -15,
                        "max": -4
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -15,
                        "max": -4
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -15,
                        "max": -4
                    }
                }
            }
        }
    },
    "distributor-engine-focused-power-distributor": {
        "name": "Engine Focused Power Distributor",
        "module": "Distributor",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "conductive-components": 1
                },
                "effects": {
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": 0,
                        "max": 10
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": 0,
                        "max": 4
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 2,
                    "conductive-components": 2,
                    "electrochemical-arrays": 1,
                    "nanobreakers": 1
                },
                "effects": {
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": 4,
                        "max": 20
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": 1,
                        "max": 10
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -11,
                        "max": -2
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -5,
                        "max": -1
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -11,
                        "max": -2
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -11,
                        "max": -2
                    }
                }
            },
            "3": {
                "components": {
                    "conductive-components": 1,
                    "selenium": 2,
                    "polymer-capacitors": 1,
                    "nanobreakers": 1
                },
                "effects": {
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": 10,
                        "max": 29
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": 3,
                        "max": 14
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -15,
                        "max": -5
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -6,
                        "max": -2
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -15,
                        "max": -5
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -15,
                        "max": -5
                    }
                }
            }
        }
    },
    "distributor-system-focused-power-distributor": {
        "name": "System Focused Power Distributor",
        "module": "Distributor",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "conductive-components": 1
                },
                "effects": {
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": 0,
                        "max": 10
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": 0,
                        "max": 4
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 2,
                    "conductive-components": 2,
                    "electrochemical-arrays": 1,
                    "nanobreakers": 1
                },
                "effects": {
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": 4,
                        "max": 20
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": 1,
                        "max": 10
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -11,
                        "max": -2
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -5,
                        "max": -1
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -11,
                        "max": -2
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -11,
                        "max": -2
                    }
                }
            },
            "3": {
                "components": {
                    "conductive-components": 1,
                    "selenium": 2,
                    "polymer-capacitors": 1,
                    "nanobreakers": 1
                },
                "effects": {
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": 10,
                        "max": 29
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": 3,
                        "max": 14
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -15,
                        "max": -5
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -6,
                        "max": -2
                    },
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": -15,
                        "max": -5
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": -15,
                        "max": -5
                    }
                }
            }
        }
    },
    "distributor-weapon-focused-power-distributor": {
        "name": "Weapon Focused Power Distributor",
        "module": "Distributor",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "conductive-components": 1
                },
                "effects": {
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": 0,
                        "max": 10
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": 0,
                        "max": 4
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 2,
                    "conductive-components": 2,
                    "electrochemical-arrays": 1,
                    "nanobreakers": 1
                },
                "effects": {
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": 4,
                        "max": 20
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": 1,
                        "max": 10
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -11,
                        "max": -2
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -5,
                        "max": -1
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -11,
                        "max": -2
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -11,
                        "max": -2
                    }
                }
            },
            "3": {
                "components": {
                    "conductive-components": 1,
                    "selenium": 2,
                    "polymer-capacitors": 1,
                    "nanobreakers": 1
                },
                "effects": {
                    "weapons-capacity": {
                        "name": "Weapons Capacity",
                        "isPercent": true,
                        "min": 10,
                        "max": 29
                    },
                    "weapons-recharge": {
                        "name": "Weapons Recharge",
                        "isPercent": true,
                        "min": 3,
                        "max": 14
                    },
                    "systems-capacity": {
                        "name": "Systems Capacity",
                        "isPercent": true,
                        "min": -15,
                        "max": -5
                    },
                    "systems-recharge": {
                        "name": "Systems Recharge",
                        "isPercent": true,
                        "min": -6,
                        "max": -2
                    },
                    "engines-capacity": {
                        "name": "Engines Capacity",
                        "isPercent": true,
                        "min": -15,
                        "max": -5
                    },
                    "engines-recharge": {
                        "name": "Engines Recharge",
                        "isPercent": true,
                        "min": -15,
                        "max": -5
                    }
                }
            }
        }
    },
    "distributor-shielded-power-distributor": {
        "name": "Shielded Power Distributor",
        "module": "Distributor",
        "recipes": {
            "1": {
                "components": {
                    "worn-shield-emitters": 1,
                    "vanadium": 2
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 0,
                        "max": 20
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "carbon": 2,
                    "shield-emitters": 2,
                    "high-density-composites": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 39
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 2
                    }
                }
            },
            "3": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 3,
                    "high-density-composites": 2,
                    "osmium": 1
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 61
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 14,
                        "max": 5
                    }
                }
            },
            "4": {
                "components": {
                    "vanadium": 1,
                    "shielding-sensors": 3,
                    "proprietary-composites": 2,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 81
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 20,
                        "max": 9
                    }
                }
            },
            "5": {
                "components": {
                    "tungsten": 1,
                    "compound-shielding": 3,
                    "core-dynamics-composites": 1,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 39,
                        "max": 100
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 25,
                        "max": 11
                    }
                }
            }
        }
    },
    "pulse-laser-efficient-weapon": {
        "name": "Efficient Weapon",
        "module": "Pulse Laser",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -11,
                        "max": -50
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -25,
                        "max": -3
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -20,
                        "max": -8
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -6,
                        "max": 4
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2,
                    "heat-exchangers": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -20,
                        "max": -61
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -21,
                        "max": 0
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -17,
                        "max": -6
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 5
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "chromium": 2,
                    "heat-exchangers": 2,
                    "samarium": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -16,
                        "max": 2
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -14,
                        "max": -4
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -3,
                        "max": 7
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -6,
                        "max": -20
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": -5,
                        "max": -20
                    }
                }
            },
            "4": {
                "components": {
                    "heat-dispersion-plate": 1,
                    "selenium": 2,
                    "heat-vanes": 1,
                    "heatsink-interlink": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -40,
                        "max": -80
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -11,
                        "max": 5
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -10,
                        "max": -2
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 8
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    }
                }
            }
        }
    },
    "pulse-laser-focused-weapon": {
        "name": "Focused Weapon",
        "module": "Pulse Laser",
        "recipes": {
            "1": {
                "components": {
                    "iron": 1,
                    "conductive-components": 1,
                    "electrochemical-arrays": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 10,
                        "max": 20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -21,
                        "max": -10
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -20,
                        "max": -10
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 50,
                        "max": 39
                    }
                }
            },
            "2": {
                "components": {
                    "iron": 2,
                    "conductive-components": 2,
                    "electrochemical-arrays": 2,
                    "micro-controllers": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 20,
                        "max": 39
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -17,
                        "max": -7
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -17,
                        "max": -7
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 39,
                        "max": 29
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 10
                    }
                }
            },
            "3": {
                "components": {
                    "iron": 1,
                    "chromium": 3,
                    "conductive-ceramics": 2,
                    "polymer-capacitors": 1,
                    "platinum": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 29,
                        "max": 61
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -14,
                        "max": -5
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -14,
                        "max": -5
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 29,
                        "max": 20
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 10,
                        "max": 20
                    }
                }
            },
            "4": {
                "components": {
                    "germanium": 2,
                    "focus-crystals": 3,
                    "polymer-capacitors": 2,
                    "nanobreakers": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 39,
                        "max": 79
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -10,
                        "max": -3
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -10,
                        "max": -3
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 20,
                        "max": 39
                    }
                }
            }
        }
    },
    "pulse-laser-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Pulse Laser",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -31,
                        "max": -10
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "manganese": 1,
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -20,
                        "max": -50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -4,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 2,
                    "magnetic-emitter-coil": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -50,
                        "max": -31
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 0
                    }
                }
            }
        }
    },
    "pulse-laser-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Pulse Laser",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": false,
                        "min": null,
                        "max": null
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": false,
                        "min": null,
                        "max": null
                    }
                }
            },
            "3": {
                "components": {
                    "zinc": 2,
                    "shielding-sensors": 2,
                    "molybdenum": 1,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 150,
                        "max": 100
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 75
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 14
                    }
                }
            },
            "4": {
                "components": {
                    "high-density-composites": 2,
                    "molybdenum": 2,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 200,
                        "max": 150
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 39,
                        "max": 100
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 10,
                        "max": 31
                    }
                }
            }
        }
    },
    "pulse-laser-overcharged-weapon": {
        "name": "Overcharged Weapon",
        "module": "Pulse Laser",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 1,
                    "hybrid-capacitors": 1,
                    "cracked-industrial-firmware": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 1,
                        "max": 14
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 10,
                        "max": 14
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 90,
                        "max": 45
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": false,
                        "min": -8,
                        "max": 0
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": false,
                        "min": 45,
                        "max": 29
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 1,
                    "security-firmware-patch": 1,
                    "praseodymium": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 8,
                        "max": 26
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 14,
                        "max": 20
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 79,
                        "max": 39
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": false,
                        "min": -6,
                        "max": 5
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": false,
                        "min": 29,
                        "max": 14
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 2,
                    "security-firmware-patch": 2,
                    "articulation-motors": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 15,
                        "max": 38
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 20,
                        "max": 25
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 70,
                        "max": 35
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": false,
                        "min": -4,
                        "max": 11
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": false,
                        "min": 14,
                        "max": 0
                    }
                }
            },
            "4": {
                "components": {
                    "zinc": 1,
                    "conductive-ceramics": 2,
                    "polymer-capacitors": 2,
                    "modified-embedded-firmware": 1,
                    "articulation-motors": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 22,
                        "max": 52
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 25,
                        "max": 29
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 61,
                        "max": 29
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": false,
                        "min": -2,
                        "max": 17
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 0,
                        "max": 0
                    }
                }
            }
        }
    },
    "burst-laser-efficient-weapon": {
        "name": "Efficient Weapon",
        "module": "Burst Laser",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -11,
                        "max": -50
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -21,
                        "max": -2
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -17,
                        "max": -6
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -6,
                        "max": 4
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2,
                    "heat-exchangers": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -21,
                        "max": -61
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -18,
                        "max": 1
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -14,
                        "max": -5
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -5,
                        "max": 5
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "chromium": 2,
                    "heat-exchangers": 2,
                    "samarium": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -31,
                        "max": -70
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -14,
                        "max": 3
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -11,
                        "max": -4
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -4,
                        "max": 7
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": -6,
                        "max": -20
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": -6,
                        "max": -20
                    }
                }
            }
        }
    },
    "burst-laser-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Burst Laser",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -31,
                        "max": -10
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            },
            "3": {
                "components": {
                    "heat-conduction-wiring": 1,
                    "manganese": 1,
                    "conductive-ceramics": 2,
                    "proto-light-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -20,
                        "max": -50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -40,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -4,
                        "max": 0
                    }
                }
            }
        }
    },
    "burst-laser-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Burst Laser",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    }
                }
            },
            "3": {
                "components": {
                    "zinc": 2,
                    "shielding-sensors": 2,
                    "molybdenum": 1,
                    "osmium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 150,
                        "max": 100
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 31,
                        "max": 75
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 14
                    }
                }
            }
        }
    },
    "burst-laser-short-range-blaster": {
        "name": "Short Range Blaster",
        "module": "Burst Laser",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -36,
                        "max": -11
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 3,
                        "max": 8
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 3,
                        "max": 8
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": -11
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 2,
                    "electrochemical-arrays": 1,
                    "insulating-membrane": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -45,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 8,
                        "max": 15
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 8,
                        "max": 15
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": -6
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "modified-consumer-firmware": 2,
                    "electrochemical-arrays": 1,
                    "conductive-polymers": 1,
                    "neofabric-insulation": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -55,
                        "max": -31
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 12,
                        "max": 23
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 11,
                        "max": 23
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 29,
                        "max": 20
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": -10
                    }
                }
            }
        }
    },
    "burst-laser-long-range-weapon": {
        "name": "Long Range Weapon",
        "module": "Burst Laser",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 2,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 10,
                        "max": 20
                    },
                    "danage-per-second": {
                        "name": "Danage Per Second",
                        "isPercent": true,
                        "min": -5,
                        "max": -3
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -6,
                        "max": -4
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -5,
                        "max": -3
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 2,
                    "modified-consumer-firmware": 2,
                    "focus-crystals": 1,
                    "insulating-membrane": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 20,
                        "max": 39
                    },
                    "danage-per-second": {
                        "name": "Danage Per Second",
                        "isPercent": true,
                        "min": -11,
                        "max": -6
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -11,
                        "max": -6
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 4
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 20,
                        "max": 4
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -11,
                        "max": -6
                    }
                }
            },
            "3": {
                "components": {
                    "sulphur": 1,
                    "modified-consumer-firmware": 2,
                    "focus-crystals": 1,
                    "conductive-polymers": 1,
                    "neofabric-insulation": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 29,
                        "max": 61
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -15,
                        "max": -9
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -16,
                        "max": -10
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 29,
                        "max": 10
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 29,
                        "max": 10
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 4
                    }
                }
            }
        }
    },
    "burst-laser-overcharged-weapon": {
        "name": "Overcharged Weapon",
        "module": "Burst Laser",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 1,
                    "hybrid-capacitors": 1,
                    "cracked-industrial-firmware": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 3,
                        "max": 15
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 10,
                        "max": 14
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 89,
                        "max": 45
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 44,
                        "max": 29
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 1,
                    "security-firmware-patch": 1,
                    "praseodymium": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 9,
                        "max": 25
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 14,
                        "max": 20
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 79,
                        "max": 39
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -5,
                        "max": 4
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 29,
                        "max": 14
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 2,
                    "security-firmware-patch": 2,
                    "articulation-motors": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 17,
                        "max": 35
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 20,
                        "max": 25
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 70,
                        "max": 35
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -4,
                        "max": 8
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 14,
                        "max": 0
                    }
                }
            }
        }
    },
    "beam-laser-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Beam Laser",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": 31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -30,
                        "max": -11
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    }
                }
            }
        }
    },
    "beam-laser-long-range-weapon": {
        "name": "Long Range Weapon",
        "module": "Beam Laser",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 1,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 10,
                        "max": 20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -6,
                        "max": -3
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 2,
                    "modified-consumer-firmware": 2,
                    "focus-crystals": 1,
                    "insulating-membrane": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 20,
                        "max": 39
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -11,
                        "max": -6
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 20,
                        "max": 4
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 20,
                        "max": 4
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 4,
                        "max": 0
                    }
                }
            }
        }
    },
    "beam-laser-short-range-blaster": {
        "name": "Short Range Blaster",
        "module": "Beam Laser",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -36,
                        "max": -11
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 3,
                        "max": 8
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 10,
                        "max": -11
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "modified-consumer-firmware": 2,
                    "electrochemical-arrays": 1,
                    "insulating-membrane": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": -45,
                        "max": -20
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 8,
                        "max": 15
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": -6
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 20,
                        "max": 10
                    }
                }
            }
        }
    },
    "beam-laser-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Beam Laser",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    }
                }
            }
        }
    },
    "lightweight-alloy-lightweight-armour": {
        "name": "Lightweight Armour",
        "module": "Lightweight Alloy",
        "recipes": {
            "1": {
                "components": {
                    "iron": 2,
                    "conductive-components": 1,
                    "high-density-composites": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": -3,
                        "max": 0
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 2
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 2
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 3
                    }
                }
            },
            "2": {
                "components": {
                    "iron": 1,
                    "conductive-components": 2,
                    "high-density-composites": 2,
                    "thermic-alloys": 2,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": -5,
                        "max": -3
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 5
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 4
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 6
                    }
                }
            },
            "3": {
                "components": {
                    "iron": 1,
                    "conductive-components": 3,
                    "high-density-composites": 2,
                    "thermic-alloys": 2,
                    "telemetry-suite": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": -7,
                        "max": -5
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 7
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 6
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 3,
                        "max": 8
                    }
                }
            }
        }
    },
    "lightweight-alloy-blast-resistant-armour": {
        "name": "Blast Resistant Armour",
        "module": "Lightweight Alloy",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 7,
                        "max": 11
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -5,
                        "max": -2
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -4,
                        "max": -2
                    }
                }
            },
            "2": {
                "components": {
                    "carbon": 2,
                    "zinc": 2,
                    "high-density-composites": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 14,
                        "max": 22
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -10,
                        "max": -5
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -8,
                        "max": -4
                    }
                }
            },
            "3": {
                "components": {
                    "carbon": 1,
                    "zinc": 1,
                    "zirconium": 2,
                    "proprietary-composites": 1,
                    "osmium": 1
                },
                "effects": {
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 21,
                        "max": 34
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -15,
                        "max": -7
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -6
                    }
                }
            }
        }
    },
    "lightweight-alloy-heavy-duty-armour": {
        "name": "Heavy Duty Armour",
        "module": "Lightweight Alloy",
        "recipes": {
            "1": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 2
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 0,
                        "max": 11
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 1
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 1
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 0,
                        "max": 1
                    }
                }
            },
            "2": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 2,
                    "high-density-composites": 2,
                    "articulation-motors": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 8,
                        "max": 22
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 2
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 2
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 1,
                        "max": 3
                    }
                }
            },
            "3": {
                "components": {
                    "carbon": 1,
                    "shield-emitters": 3,
                    "high-density-composites": 3,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 18,
                        "max": 34
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 4
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 2,
                        "max": 3
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 3,
                        "max": 4
                    }
                }
            },
            "4": {
                "components": {
                    "vanadium": 1,
                    "shielding-sensors": 3,
                    "proprietary-composites": 2,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 28,
                        "max": 45
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 5
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 3,
                        "max": 4
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 6
                    }
                }
            },
            "5": {
                "components": {
                    "tungsten": 1,
                    "compound-shielding": 2,
                    "core-dynamics-composites": 2,
                    "reinforced-mounting-plate": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    },
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 35,
                        "max": 56
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 6
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 4,
                        "max": 5
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": 6,
                        "max": 7
                    }
                }
            }
        }
    },
    "lightweight-alloy-kinetic-resistant-armour": {
        "name": "Kinetic Resistant Armour",
        "module": "Lightweight Alloy",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 6,
                        "max": 10
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -4,
                        "max": -2
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -7,
                        "max": -3
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "vanadium": 2,
                    "tungsten": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 12,
                        "max": 20
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -8,
                        "max": -4
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -11,
                        "max": -6
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "vanadium": 1,
                    "high-density-composites": 2,
                    "molybdenum": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": 18,
                        "max": 30
                    },
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": -12,
                        "max": -6
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -17,
                        "max": -8
                    }
                }
            }
        }
    },
    "lightweight-alloy-thermal-resistant-armour": {
        "name": "Thermal Resistant Armour",
        "module": "Lightweight Alloy",
        "recipes": {
            "1": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "vanadium": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 5,
                        "max": 8
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -6,
                        "max": -3
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -5,
                        "max": -2
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "heat-dispersion-plate": 2,
                    "tungsten": 1,
                    "neofabric-insulation": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 10,
                        "max": 16
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -11,
                        "max": -6
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -10,
                        "max": -5
                    }
                }
            },
            "3": {
                "components": {
                    "nickel": 1,
                    "zinc": 1,
                    "heat-exchangers": 2,
                    "molybdenum": 1,
                    "bromellite": 1
                },
                "effects": {
                    "thermal-resistance": {
                        "name": "Thermal Resistance",
                        "isPercent": false,
                        "min": 15,
                        "max": 24
                    },
                    "explosive-resistance": {
                        "name": "Explosive Resistance",
                        "isPercent": false,
                        "min": -17,
                        "max": -8
                    },
                    "kinetic-resistance": {
                        "name": "Kinetic Resistance",
                        "isPercent": false,
                        "min": -15,
                        "max": -7
                    }
                }
            }
        }
    },
    "hull-reinforcement-lightweight-hull-reinforcement": {
        "name": "Lightweight Hull Reinforcement",
        "module": "Hull Reinforcement",
        "recipes": {
            "1": {
                "components": {
                    "iron": 2,
                    "conductive-components": 1,
                    "high-density-composites": 1
                },
                "effects": {
                    "hull-boost": {
                        "name": "Hull Boost",
                        "isPercent": true,
                        "min": 0,
                        "max": 3
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -3
                    },
                    "hull-reinforcement": {
                        "name": "Hull Reinforcement",
                        "isPercent": true,
                        "min": -6,
                        "max": 0
                    }
                }
            }
        }
    },
    "plasma-accelerators-efficient-weapon": {
        "name": "Efficient Weapon",
        "module": "Plasma Accelerators",
        "recipes": {
            "1": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -11,
                        "max": -50
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -25,
                        "max": -3
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -20,
                        "max": -8
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 6,
                        "max": 4
                    }
                }
            },
            "2": {
                "components": {
                    "sulphur": 1,
                    "heat-dispersion-plate": 2,
                    "heat-exchangers": 1,
                    "micro-weave-cooling-hoses": 1
                },
                "effects": {
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": -21,
                        "max": -61
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -21,
                        "max": 0
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -17,
                        "max": -6
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 5,
                        "max": 5
                    }
                }
            }
        }
    },
    "plasma-accelerators-focused-weapon": {
        "name": "Focused Weapon",
        "module": "Plasma Accelerators",
        "recipes": {
            "1": {
                "components": {
                    "iron": 1,
                    "conductive-components": 1,
                    "electrochemical-arrays": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 10,
                        "max": 19
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -20,
                        "max": -10
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -20,
                        "max": -10
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 50,
                        "max": 39
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "iron": 2,
                    "conductive-components": 2,
                    "electrochemical-arrays": 2,
                    "micro-controllers": 1
                },
                "effects": {
                    "maximum-range": {
                        "name": "Maximum Range",
                        "isPercent": true,
                        "min": 19,
                        "max": 39
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -17,
                        "max": -7
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -17,
                        "max": -7
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 39,
                        "max": 29
                    },
                    "armour-piercing": {
                        "name": "Armour Piercing",
                        "isPercent": true,
                        "min": -1,
                        "max": 10
                    }
                }
            }
        }
    },
    "plasma-accelerators-light-weight-mount": {
        "name": "Light Weight Mount",
        "module": "Plasma Accelerators",
        "recipes": {
            "1": {
                "components": {
                    "phosphorus": 2,
                    "galvanising-alloys": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 0,
                        "max": -11
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -20,
                        "max": 0
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -1,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": -1
                    }
                }
            },
            "2": {
                "components": {
                    "heat-conduction-wiring": 2,
                    "manganese": 2,
                    "phase-alloys": 1,
                    "cmm-composite": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": -11,
                        "max": -31
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": -30,
                        "max": -11
                    },
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -2,
                        "max": 0
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -2,
                        "max": -1
                    }
                }
            }
        }
    },
    "plasma-accelerators-overcharged-weapon": {
        "name": "Overcharged Weapon",
        "module": "Plasma Accelerators",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 1,
                    "hybrid-capacitors": 1,
                    "cracked-industrial-firmware": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 1,
                        "max": 14
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 9,
                        "max": 14
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 89,
                        "max": 45
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -8,
                        "max": 0
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 45,
                        "max": 29
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 1,
                    "conductive-components": 2,
                    "electrochemical-arrays": 1,
                    "security-firmware-patch": 1,
                    "praseodymium": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": 8,
                        "max": 26
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": 14,
                        "max": 19
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 79,
                        "max": 39
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": -6,
                        "max": 5
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 1,
                        "max": 0
                    },
                    "thermal-load": {
                        "name": "Thermal Load",
                        "isPercent": true,
                        "min": 29,
                        "max": 14
                    }
                }
            }
        }
    },
    "plasma-accelerators-rapid-fire-modification": {
        "name": "Rapid Fire Modification",
        "module": "Plasma Accelerators",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "heat-dispersion-plate": 2
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -22,
                        "max": 5
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 5,
                        "max": 25
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -26,
                        "max": -16
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "mechanical-scrap": 3,
                    "heat-dispersion-plate": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "damage-per-second": {
                        "name": "Damage Per Second",
                        "isPercent": true,
                        "min": -12,
                        "max": 17
                    },
                    "rate-of-fire": {
                        "name": "Rate Of Fire",
                        "isPercent": true,
                        "min": 11,
                        "max": 34
                    },
                    "damage": {
                        "name": "Damage",
                        "isPercent": true,
                        "min": -20,
                        "max": -13
                    },
                    "jitter": {
                        "name": "Jitter",
                        "isPercent": false,
                        "min": 2,
                        "max": 1
                    },
                    "distributor-draw": {
                        "name": "Distributor Draw",
                        "isPercent": true,
                        "min": 0,
                        "max": -20
                    }
                }
            }
        }
    },
    "plasma-accelerators-sturdy-mount": {
        "name": "Sturdy Mount",
        "module": "Plasma Accelerators",
        "recipes": {
            "1": {
                "components": {
                    "nickel": 2,
                    "vanadium": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 50,
                        "max": 0
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 10,
                        "max": 25
                    }
                }
            },
            "2": {
                "components": {
                    "nickel": 2,
                    "shield-emitters": 2,
                    "tungsten": 1,
                    "hn-shock-mount": 1
                },
                "effects": {
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 100,
                        "max": 50
                    },
                    "integrity": {
                        "name": "Integrity",
                        "isPercent": true,
                        "min": 20,
                        "max": 50
                    }
                }
            }
        }
    },
    "interdictor-fsd-interdictor-fsd": {
        "name": "Interdictor (FSD)",
        "module": "Interdictor (FSD)",
        "recipes": {
            "1": {
                "components": {
                    "mechanical-scrap": 2,
                    "anomalous-fsd-telemetry": 1,
                    "iron": 2,
                    "tagged-encryption-codes": 1
                },
                "effects": {
                    "facing-limit": {
                        "name": "Facing Limit",
                        "isPercent": true,
                        "min": -11,
                        "max": 0
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 14,
                        "max": 0
                    },
                    "range": {
                        "name": "Range",
                        "isPercent": true,
                        "min": 0,
                        "max": 10
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 10,
                        "max": 0
                    }
                }
            },
            "2": {
                "components": {
                    "grid-resistors": 2,
                    "mechanical-equipment": 2,
                    "strange-wake-solutions": 1,
                    "anomalous-fsd-telemetry": 2,
                    "open-symmetric-keys": 1
                },
                "effects": {
                    "facing-limit": {
                        "name": "Facing Limit",
                        "isPercent": true,
                        "min": -21,
                        "max": -6
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 31,
                        "max": 10
                    },
                    "range": {
                        "name": "Range",
                        "isPercent": true,
                        "min": 4,
                        "max": 20
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 20,
                        "max": 5
                    }
                }
            },
            "3": {
                "components": {
                    "grid-resistors": 1,
                    "hybrid-capacitors": 1,
                    "mechanical-components": 2,
                    "eccentric-hyperspace-trajectories": 1,
                    "iron": 1,
                    "strange-wake-solutions": 2,
                    "atypical-encryption-archives": 1,
                    "nanobreakers": 1
                },
                "effects": {
                    "facing-limit": {
                        "name": "Facing Limit",
                        "isPercent": true,
                        "min": -31,
                        "max": -11
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 45,
                        "max": 20
                    },
                    "range": {
                        "name": "Range",
                        "isPercent": true,
                        "min": 10,
                        "max": 29
                    },
                    "mass": {
                        "name": "Mass",
                        "isPercent": true,
                        "min": 31,
                        "max": 10
                    }
                }
            },
            "4": {
                "components": {
                    "mechanical-components": 2,
                    "eccentric-hyperspace-trajectories": 2
                },
                "effects": {
                    "facing-limit": {
                        "name": "Facing Limit",
                        "isPercent": true,
                        "min": 29,
                        "max": 79
                    },
                    "power-draw": {
                        "name": "Power Draw",
                        "isPercent": true,
                        "min": 61,
                        "max": 31
                    },
                    "range": {
                        "name": "Range",
                        "isPercent": true,
                        "min": -40,
                        "max": -15
                    }
                }
            }
        }
    }
};