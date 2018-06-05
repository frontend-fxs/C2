/*var templates = {
    data: 'https://frontend-fxs.github.io/C2/js/templates/data.mst',
    simpleFilters: 'https://frontend-fxs.github.io/C2/js/templates/simple-filter.mst',
    simpleFiltersMobile: 'https://frontend-fxs.github.io/C2/js/templates/simple-filter-mobile.mst',
    simpleFiltersMobileToggle: 'https://frontend-fxs.github.io/C2/js/templates/simple-filter-mobile-toggle.mst',
    advancedFilters: 'https://frontend-fxs.github.io/C2/js/templates/advanced-filter.mst',
    ecocal: 'https://frontend-fxs.github.io/C2/js/templates/ecocal.mst'
}*/
var templates = {
    data: 'js/templates/data.mst',
    dataMobile: 'js/templates/dataMobile.mst',
    simpleFilter: 'js/templates/simple-filter.mst',
    simpleFilterMobile: 'js/templates/simple-filter-mobile.mst',
    simpleFilterMobileToggle: 'js/templates/simple-filter-mobile-toggle.mst',
    advancedFilter: 'js/templates/advanced-filter.mst',
    ecocal: 'js/templates/ecocal.mst'
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
                    ImpactLevel: false,
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
                    ImpactLevel: false,
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
                    ImpactLevel: false,
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
                    ImpactLevel: false,
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
var addEvents = function() {
    $('.fxs_ecocal_event_row').click(function() {
        $(this).next('.fxs_ecocal_event_collapsible').toggleClass('fxs_hideElements')
        $(this).find('.fa.right').toggleClass('fa-chevron-right fa-chevron-down')
        $(this).find('.fa.left').toggleClass('fa-chevron-left fa-chevron-down')
    })
    $('[data-toggle="tooltip"]').tooltip()
    $('#fxs_ecocal_simple_filter_date_picker_toggle').daterangepicker({ opens: 'center', drops: 'down' })
    $('#fxs_ecocal_advanced_filter_date_picker_toggle').daterangepicker({ opens: 'center', drops: 'up' })
    $('#fxs_ecocal_simple_filter_mobile_date_picker_toggle').daterangepicker({ opens: 'center', drops: 'up' })
    $('#fxs_simple_filter_mobile_toggle_volume').click(function() {
        $(this).toggleClass('fa-volume-off fa-volume-up')
    })
    $('#fxs_ecocal_advanced_filters_toggle').click(function() {
        $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_advanced_filter_close').click(function() {
        $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_advanced_filter_apply').click(function() {
        $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_advanced_filter_cancel').click(function() {
        $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_open_filters').click(function() {
        $('#fxs_ecocal_simple_filter_mobile').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_simple_filter_close').click(function() {
        $('#fxs_ecocal_simple_filter_mobile').toggleClass('fxs_hideElements')
    })



    $('#fxs_show_visibility_selectors').click(function() {
        $('#fxs_ecocal_header').toggleClass('fxs_edit_cols');
    })
    $('#fxs_actual_col_visibility').click(function() {

    });
    $('#fxs_deviation_col_visibility').click(function() {

    });
    $('#fxs_consensus_col_visibility').click(function() {

    });
    $('#fxs_previous_col_visibility').click(function() {

    });
}
var addEventsMobile = function() {
    $('.fxs_ecocal_event_row').click(function() {
        $(this).next('.fxs_ecocal_event_collapsible').toggleClass('fxs_hideElements')
        $(this).find('.fa.right').toggleClass('fa-chevron-right fa-chevron-down')
        $(this).find('.fa.left').toggleClass('fa-chevron-left fa-chevron-down')
    })
    $('[data-toggle="tooltip"]').tooltip()
    $('.fxs_ecocal_event_row_item.expandable .fa-pencil-square-o').on('click', function() {})
    $('#fxs_ecocal_simple_filter_mobile_date_picker_toggle').daterangepicker()
    $('#fxs_simple_filter_mobile_toggle_volume').click(function() {
        $(this).toggleClass('fa-volume-off fa-volume-up')
    })
    $('.fa-pencil-square-o').click(function() {
        $('.fxs_ecocal_header input').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_advanced_filters_toggle').click(function() {
        $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_advanced_filter_close').click(function() {
        $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_advanced_filter_apply').click(function() {
        $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_advanced_filter_cancel').click(function() {
        $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_open_filters').click(function() {
        $('#fxs_ecocal_simple_filter_mobile').toggleClass('fxs_hideElements')
    })
    $('#fxs_ecocal_simple_filter_close').click(function() {
        $('#fxs_ecocal_simple_filter_mobile').toggleClass('fxs_hideElements')
    })

}
var renderData = function() {
    $.get(templates.data, function(template) {
        var rendered = Mustache.render(template, dataJson)
        $('#fxs_ecocal_data').html(rendered)
        addEvents();
    })
}
var renderDataMobile = function() {
    $.get(templates.dataMobile, function(template) {
        var rendered = Mustache.render(template, dataJson)
        $('#fxs_ecocal_data_mobile').html(rendered)
        addEventsMobile();
    })
}

var advancedFiltersJson = {
    Translations: translations
}
var renderAdvancedFilters = function() {
    $.get(templates.advancedFilter, function(template) {
        var rendered = Mustache.render(template, advancedFiltersJson)
        $('#fxs_ecocal_advanced_filter').html(rendered);
        renderData();
    })
}
var simpleFiltersJson = {
    Translations: translations
}
var renderSimpleFiltersMobile = function() {
    $.get(templates.simpleFilterMobile, function(template) {
        var rendered = Mustache.render(template, simpleFiltersJson)
        $('#fxs_ecocal_simple_filter_mobile').html(rendered);
        renderDataMobile();
    })
}
var renderSimpleFiltersMobileToggle = function() {
    $.get(templates.simpleFilterMobileToggle, function(template) {
        var rendered = Mustache.render(template, simpleFiltersJson)
        $('#fxs_ecocal_simple_filter_mobile_toggle').html(rendered);
        renderSimpleFiltersMobile();
    })
}
var renderSimpleFilters = function() {
    $.get(templates.simpleFilter, function(template) {
        var rendered = Mustache.render(template, simpleFiltersJson)
        $('#fxs_ecocal_simple_filter').html(rendered);
        renderAdvancedFilters();

    })
}
var ecoCalJson = {
    Translations: translations
}
var renderEcocal = function() {
    $.get(templates.ecocal, function(template) {
        var rendered = Mustache.render(template, ecoCalJson);
        $('#fxs_ecocal').html(rendered);
        if (isMobile()) {
            renderSimpleFiltersMobileToggle();
        } else {
            renderSimpleFilters();
        }
    })
}
renderEcocal();
$(window).resize(function() {
    renderEcocal();
});