/* var templates = {
  data: 'https://frontend-fxs.github.io/C2/js/templates/data.mst',
  simpleFilters: 'https://frontend-fxs.github.io/C2/js/templates/simple-filter.mst',
  advancedFilters: 'https://frontend-fxs.github.io/C2/js/templates/advanced-filter.mst',
  ecocal: 'https://frontend-fxs.github.io/C2/js/templates/ecocal.mst'
} */
var templates = {
  data: 'js/templates/data.mst',
  simpleFilters: 'js/templates/simple-filter.mst',
  advancedFilters: 'js/templates/advanced-filter.mst',
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
  None: 'None'
}
var dataJson = {
  Translations: translations,
  Periods: [
    {
      Header: 'Tuesday, May 22',
      Rows: [
        {
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
        }
      ]
    },
    {
      Header: 'Wednesday, May 23',
      Rows: [
        {
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
        }
      ]
    },
    {
      Header: 'Thursday, May 24',
      Rows: [
        {
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
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
          DashboardLink: 'google.es'
        }
      ]
    }
  ]
}
var addEvents = function () {
  $('.fxs_ecocal_event_row').click(function () {
    $(this).next('.fxs_ecocal_event_collapsible').toggleClass('fxs_hideElements')
    $(this).find('.fa.right').toggleClass('fa-chevron-right fa-chevron-down')
    $(this).find('.fa.left').toggleClass('fa-chevron-left fa-chevron-down')
  })
  $('[data-toggle="tooltip"]').tooltip()
  $('.fxs_ecocal_event_row_item.expandable .fa-pencil-square-o').on('click', function () {})
  $('#fxs_ecocal_simple_filter_date_picker_toggle').daterangepicker()
  $('#fxs_ecocal_advanced_filter_date_picker_toggle').daterangepicker()
  $('#fxs_simple_filter_mobile_toggle_volume').click(function () {
    $(this).toggleClass('fa-volume-off fa-volume-up')
  })
  $('.fa-pencil-square-o').click(function () {
    $('.fxs_ecocal_header input').toggleClass('fxs_hideElements')
  })
  $('#fxs_ecocal_advanced_filters_toggle').click(function () {
    $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
  })
  $('#fxs_ecocal_advanced_filter_close').click(function () {
    $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
  })
  $('#fxs_ecocal_advanced_filter_apply').click(function () {
    $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
  })
  $('#fxs_ecocal_advanced_filter_cancel').click(function () {
    $('.fxs_ecocal_advanced_filter').toggleClass('fxs_hideElements')
  })
  $('#fxs_ecocal_open_filters').click(function () {
    $('#fxs_ecocal_simple_filter').toggleClass('fxs_opened_mobile')
  })
  $('fxs_ecocal_header .fxs_ecocal_event_row_item.can_be_hidden input[type="checkbox"]').change(function(){
    $(this).parent().toggleClass('fxs_hideElements');
    var canBeHiddenWidth = $(this).parent().width();
  });
}
var renderData = function () {
  $.get(templates.data, function (template) {
    var rendered = Mustache.render(template, dataJson)
    $('#fxs_ecocal_data').html(rendered)
    addEvents()
  })
}
var simpleFiltersJson = {
  Translations: translations
}
var renderSimpleFilters = function () {
  $.get(templates.simpleFilters, function (template) {
    var rendered = Mustache.render(template, simpleFiltersJson)
    $('#fxs_ecocal_menu').html(rendered)
    renderData()
  })
}
var advancedFiltersJson = {
  Translations: translations
}
var renderAdvancedFilters = function () {
  $.get(templates.advancedFilters, function (template) {
    var rendered = Mustache.render(template, advancedFiltersJson)
    $('#fxs_ecocal_filter').html(rendered)
    renderSimpleFilters()
  })
}
var ecoCalJson = {
  Translations: translations
}
var renderEcocal = function () {
  $.get(templates.ecocal, function (template) {
    var rendered = Mustache.render(template, ecoCalJson)
    $('#fxs_ecocal').html(rendered)
    renderAdvancedFilters()
  })
}
renderEcocal()
