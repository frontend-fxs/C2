var templates = {
    ecocalCustom: 'js/templates/ecocal-custom.mst',
    simpleFilterMobileToggle: 'js/templates/simple-filter-mobile-toggle.mst',
    ecocalFilter: 'js/templates/ecocal-filter-custom.mst',
    data: 'js/templates/data.mst',
    dataMobile: 'js/templates/dataMobile.mst'
}
var translations = {
    PreviousEvents: 'PREVIOUS EVENTS',
    NextEvents: 'NEXT EVENTS',
    Time: 'Time',
    Impact: 'Impact',
    Event: 'Event',
    Actual: 'Actual',
    Deviation: 'Dev',
    Consensus: 'Consensus',
    Previous: 'Previous',
    RecentNext: 'Recent & Next',
    Today: 'Today',
    Tomorrow: 'Tomorrow',
    ThisWeek: 'This week',
    NextWeek: 'Next Week',
    SetGMT: 'Set GMT',
    Notifications: 'Notifications',
    Country: 'Country',
    Category: 'Category',
    Tradeable: 'Tradeable',
    MyFilters: 'My Filters',
    Defaults: 'Defaults',
    AdvancedFilters: 'Advanced Filters',
    Tradeable: 'Tradeable',
    Filters: 'FILTERS',
    EventName: 'Event Name',
    Countries: 'Countries',
    SaveSettings: 'Save settings',
    Apply: 'Apply',
    Cancel: 'Cancel',
    All: 'All',
    None: 'None',
    ApplySelection: 'Apply Selection',
    OfficialSource: "Official Source",
    Subscribe: "Subscribe",
    AddEvent: "Add Event"
}
var dataJson = {
    Translations: translations,
    Periods: [{
            Header: 'Tuesday, May 22',
            Rows: [{
                    IsActive: true,
                    IsNow: true,
                    IsLastNow: false,
                    Tradeable: true,
                    CountDown: 'NOW',
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'Core Personal Consumption Expenditure - Price Index (MoM)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: true,
                    IsLastNow: false,
                    Tradeable: true,
                    CountDown: 'NOW',
                    ImpactLevel: 3,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: true,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: true,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: true,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: true,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: 'NOW',
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: true,
                    IsLastNow: true,
                    Tradeable: true,
                    CountDown: 'NOW',
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: "in 1'",
                    ImpactLevel: 1,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    EventType: 'REPORT',
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: "in 1'",
                    ImpactLevel: 0,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    EventType: 'SPEECH',
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: "in 1'",
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: "in 36'",
                    ImpactLevel: 0,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: true
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: true
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: true
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: "in 59'",
                    ImpactLevel: 1,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: true
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: true
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: true
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                }
            ]
        },
        {
            Header: 'Wednesday, May 23',
            Rows: [{
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '08:20',
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '09:20',
                    ImpactLevel: 0,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: true
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: true
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: true
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: true,
                    CountDown: '09:20',
                    ImpactLevel: 3,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: true,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: true,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: true,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: true,
                    CountDown: '09:20',
                    ImpactLevel: 3,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: true,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: true,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: true,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '09:22',
                    ImpactLevel: 0,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: true
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: true
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: true
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '09:27',
                    ImpactLevel: 1,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: true
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: true
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: true
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: true,
                    CountDown: '09:42',
                    ImpactLevel: 3,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: true,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: true,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: true,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '10:05',
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '10:22',
                    ImpactLevel: 1,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: true
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: true
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: true
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                }
            ]
        },
        {
            Header: 'Thursday, May 24',
            Rows: [{
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: true,
                    CountDown: '09:20',
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '09:20',
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: true,
                    CountDown: '09:22',
                    ImpactLevel: 3,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: true,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: true,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: true,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '09:22',
                    ImpactLevel: 1,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: true
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: true
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: true
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '09:22',
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '09:37',
                    ImpactLevel: 2,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: true,
                    CountDown: '09:46',
                    ImpactLevel: 3,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: true,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: true,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: true,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: true,
                    CountDown: '10:20',
                    ImpactLevel: 3,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: true,
                        Low: false
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: true,
                        Low: false
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: true,
                            Low: false
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                },
                {
                    IsActive: true,
                    IsNow: false,
                    IsLastNow: false,
                    Tradeable: false,
                    CountDown: '10:22',
                    ImpactLevel: 1,
                    Flag: 'us',
                    Currency: 'EUR',
                    Title: 'CBI Distributive Trades Survey - Realized (MoM) (May)',
                    Actual: {
                        Value: '¥-9999.99B',
                        High: false,
                        Low: true
                    },
                    Deviation: {
                        Value: '-5.66%',
                        High: false,
                        Low: true
                    },
                    Consensus: '¥-9999.99B',
                    Previous: {
                        Value: '¥-9999.99B',
                        Revised: {
                            Tooltip: 'Revised From ',
                            Value: '¥-9999.99B',
                            High: false,
                            Low: true
                        }
                    },
                    DashboardLink: 'google.es',
                    Detail: {
                        Main: {
                            Title: "Event Date",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        Description: {
                            Title: "Event Date Description",
                            Content: "Lorem ipsum dolor sit amet, eu qui exerci ridens facilisis, pri ut suas consequat incorrupte. Vix ei inermis omittantur, an vim latine equidem lucilius, mei eu magna sapientem expetendis. Dicant consul latine no pri, petentium consequat gloriatur pri an, eos eu diceret alienum reformidans. Te ius nostrud oporteat, zril assentior his ne. In has debitis lucilius convenire."
                        },
                        OfficialSource: "https://fxstreet.com",
                        Subscribe: "https://fxstreet.com",
                        AddEvent: "https://fxstreet.com"
                    }
                }
            ]
        }
    ]
}

function viewport() {
    var e = window,
        a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] };
}
var isMobile = function() {
    var viewportWidth = viewport().width;
    return viewportWidth < 768;
}
var isTablet = function() {
    var viewportWidth = viewport().width;
    return viewportWidth < 1024 && viewportWidth > 768;
}
var renderEcocalCustom = function() {
    $.get(templates.ecocalCustom, function(template) {
        var rendered = Mustache.render(template, dataJson)
        $('#fxs_ecocal_custom').html(rendered);
        renderEcocalFilter();
    });
}
var renderEcocalFilter = function() {
    $.get(templates.ecocalFilter, function(template) {
        var rendered = Mustache.render(template, dataJson)
        $('#fxs_ecocal_filter_custom').html(rendered);
        if (isTablet() || isMobile()) {
            renderDataMobile()
        } else {
            renderData();
        }
    })
}
var renderDataMobile = function() {
    $.get(templates.dataMobile, function(template) {
        var rendered = Mustache.render(template, dataJson)
        $('#fxs_ecocal_data_mobile').html(rendered);
        if (isMobile()) {
            renderMobileToggle();
        } else {
            addEvents();
        }
    })
}
var renderMobileToggle = function() {
    $.get(templates.simpleFilterMobileToggle, function(template) {
        var rendered = Mustache.render(template, dataJson)
        $('#fxs_ecocal_filter_toggle').html(rendered);
        addEvents();
    });
}
var renderData = function() {
    $.get(templates.data, function(template) {
        var rendered = Mustache.render(template, dataJson)
        $('#fxs_ecocal_data').html(rendered);
        addEvents();
    })
}
var addEvents = function() {
    $('#fxs_ecocal_custom_show_secondary_countries').click(function() {
        $('#fxs_ecocal_custom_secondary_countries').toggleClass('fxs_hideElements ');
    })
    $('#fxs_ecocal_custom_secondary_countries_close').click(function() {
        $('#fxs_ecocal_custom_secondary_countries').toggleClass('fxs_hideElements ');
    });
    $('#fxs_ecocal_open_filters').click(function() {
        $('#fxs_ecocal_filter_custom').toggleClass('opened');
    });
    $('#fxs_ecocal_custom_advanced_filter_close').click(function() {
        $('#fxs_ecocal_filter_custom').toggleClass('opened');
    });
    $('#fxs_toggle_filter_mobile_volume').click(function() {
        $(this).toggleClass('fa-volume-up fa-volume-off');
    });
}
renderEcocalCustom();
$(window).on('resize', function() { renderEcocalCustom() });