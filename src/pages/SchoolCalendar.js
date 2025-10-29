import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { CalendarIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import events from '../data/events';

const SchoolCalendar = () => {
  const [currentView, setCurrentView] = useState('month');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedFilters, setSelectedFilters] = useState({
    holiday: true,
    academic: true,
    earlyDismissal: true,
    testing: true,
    pta: true,
    afterSchool: true
  });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [language, setLanguage] = useState('en');
  const [currentWeekOffset, setCurrentWeekOffset] = useState(0);

  useEffect(() => {
    document.title = 'School Calendar - PS 146 Anna M. Short';
  }, []);

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    const firstDay = new Date(year, month, 1).getDay();
    for (let i = 0; i < firstDay; i++) days.push(null);
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const getStartOfWeek = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() - day);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const getWeekDays = () => {
    const base = new Date(currentYear, currentMonth, 1);
    const start = getStartOfWeek(base);
    const weekStart = new Date(start);
    weekStart.setDate(start.getDate() + currentWeekOffset * 7);
    const days = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(weekStart.getDate() + i);
      days.push(d);
    }
    return { weekStart, days };
  };

  const getFilteredEvents = () => {
    return events.filter(event => selectedFilters[event.category]);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    return getFilteredEvents()
      .filter(event => event.date >= today)
      .sort((a, b) => a.date - b.date)
      .slice(0, 5);
  };

  const prevMonth = () => {
    if (currentView === 'week') { setCurrentWeekOffset(currentWeekOffset - 1); return; }
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear(currentYear - 1); } else { setCurrentMonth(currentMonth - 1); }
  };

  const nextMonth = () => {
    if (currentView === 'week') { setCurrentWeekOffset(currentWeekOffset + 1); return; }
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear(currentYear + 1); } else { setCurrentMonth(currentMonth + 1); }
  };

  const categoryColors = {
    holiday: 'bg-red-700',
    academic: 'bg-ps146-coral-600',
    earlyDismissal: 'bg-orange-600',
    testing: 'bg-purple-700',
    pta: 'bg-yellow-600',
    afterSchool: 'bg-green-700'
  };

  const getCategoryName = (category) => {
    switch(category) {
      case 'holiday': return 'Holiday';
      case 'academic': return 'Academic';
      case 'earlyDismissal': return 'Early Dismissal';
      case 'testing': return 'Testing';
      case 'pta': return 'PTA';
      case 'afterSchool': return 'After-School';
      default: return category;
    }
  };

  const getCategoryNameES = (category) => {
    switch(category) {
      case 'holiday': return 'Feriado';
      case 'academic': return 'Académico';
      case 'earlyDismissal': return 'Salida Temprana';
      case 'testing': return 'Exámenes';
      case 'pta': return 'PTA';
      case 'afterSchool': return 'Programas Después de Clases';
      default: return category;
    }
  };

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', options);
  };

  const getEventTitle = (event) => (language === 'es' && event.titleES ? event.titleES : event.title);
  const getEventDescription = (event) => (language === 'es' && event.descriptionES ? event.descriptionES : (event.description || ''));

  const toggleFilter = (filter) => setSelectedFilters({ ...selectedFilters, [filter]: !selectedFilters[filter] });

  const getEventsForDay = (day) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day.getDate() &&
             eventDate.getMonth() === day.getMonth() &&
             eventDate.getFullYear() === day.getFullYear() &&
             (selectedFilters[event.category] || false);
    });
  };

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const days = getDaysInMonth(currentMonth, currentYear);
  const upcomingEvents = getUpcomingEvents();
  const closeModal = () => setSelectedEvent(null);

  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-ps146-navy-900 to-ps146-navy-800">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAgMy4zMS0yLjY5IDYtNiA2cy02LTIuNjktNi02IDIuNjktNiA2LTYgNiAyLjY5IDYgNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-ps146-coral-600 rounded-2xl mb-6 shadow-lg">
              <CalendarIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">School Calendar</h1>
            <div className="w-24 h-1.5 bg-ps146-coral-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-light">
              Stay informed about school events, holidays, and important dates throughout the academic year
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16 bg-gradient-to-br from-white to-ps146-navy-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg border-2 border-ps146-navy-100 p-6 sticky top-24">

                {/* Filter Events */}
                <h3 className="text-xl font-bold text-ps146-navy-900 mb-6">Filter Events</h3>
                <div className="space-y-3 mb-8">
                  {[
                    ['holiday','Holidays','bg-red-700','border-red-700'],
                    ['academic','Academic Events','bg-ps146-coral-600','border-ps146-coral-600'],
                    ['earlyDismissal','Early Dismissal','bg-orange-600','border-orange-600'],
                    ['testing','Testing','bg-purple-700','border-purple-700'],
                    ['pta','PTA Events','bg-yellow-600','border-yellow-600'],
                    ['afterSchool','After-School Programs','bg-green-700','border-green-700'],
                  ].map(([key,label,bg,border]) => (
                    <label key={key} className="flex items-center cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedFilters[key]}
                        onChange={() => toggleFilter(key)}
                        className="h-5 w-5 rounded border-2 focus:ring-2 focus:ring-ps146-coral-500 focus:ring-offset-2 text-ps146-coral-600"
                      />
                      <span className="ml-3 flex items-center text-ps146-navy-800 text-sm font-medium group-hover:text-ps146-coral-600 transition-colors">
                        <span className={`h-3 w-3 ${bg} rounded-full mr-2`}></span>
                        {label}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Language Toggle */}
                <div className="mb-8 pb-8 border-b border-ps146-navy-100">
                  <h3 className="text-xl font-bold text-ps146-navy-900 mb-4">Language</h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setLanguage('en')}
                      className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${language === 'en' ? 'bg-ps146-coral-600 text-white shadow-lg' : 'bg-ps146-navy-50 text-ps146-navy-800 hover:bg-ps146-navy-100'}`}
                    >
                      EN
                    </button>
                    <button
                      onClick={() => setLanguage('es')}
                      className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all ${language === 'es' ? 'bg-ps146-coral-600 text-white shadow-lg' : 'bg-ps146-navy-50 text-ps146-navy-800 hover:bg-ps146-navy-100'}`}
                    >
                      ES
                    </button>
                  </div>
                </div>

                {/* View Options */}
                <div className="mb-8 pb-8 border-b border-ps146-navy-100">
                  <h3 className="text-xl font-bold text-ps146-navy-900 mb-4">View</h3>
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => setCurrentView('month')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${currentView === 'month' ? 'bg-ps146-coral-600 text-white shadow-lg' : 'bg-ps146-navy-50 text-ps146-navy-800 hover:bg-ps146-navy-100'}`}
                    >
                      Month View
                    </button>
                    <button
                      onClick={() => { setCurrentView('week'); setCurrentWeekOffset(0); }}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${currentView === 'week' ? 'bg-ps146-coral-600 text-white shadow-lg' : 'bg-ps146-navy-50 text-ps146-navy-800 hover:bg-ps146-navy-100'}`}
                    >
                      Week View
                    </button>
                    <button
                      onClick={() => setCurrentView('list')}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${currentView === 'list' ? 'bg-ps146-coral-600 text-white shadow-lg' : 'bg-ps146-navy-50 text-ps146-navy-800 hover:bg-ps146-navy-100'}`}
                    >
                      List View
                    </button>
                  </div>
                  <button
                    onClick={() => { setCurrentMonth(new Date().getMonth()); setCurrentYear(new Date().getFullYear()); setCurrentWeekOffset(0); }}
                    className="w-full mt-4 py-3 border-2 border-ps146-coral-600 text-ps146-coral-600 rounded-lg hover:bg-ps146-coral-600 hover:text-white transition-all font-semibold"
                  >
                    Today
                  </button>
                </div>

                {/* Upcoming Events */}
                <div>
                  <h3 className="text-xl font-bold text-ps146-navy-900 mb-4">Upcoming Events</h3>
                  <div className="space-y-4">
                    {upcomingEvents.length > 0 ? (
                      upcomingEvents.map((event) => (
                        <div key={event.id} className="border-l-4 pl-4 py-2 hover:bg-ps146-navy-50 rounded-r transition-colors cursor-pointer" style={{
                          borderColor: event.category === 'holiday' ? '#b91c1c' : event.category === 'academic' ? '#31a3dd' : event.category === 'earlyDismissal' ? '#ea580c' : event.category === 'testing' ? '#7c3aed' : event.category === 'pta' ? '#ca8a04' : '#15803d'
                        }} onClick={() => setSelectedEvent(event)}>
                          <div className="text-xs text-ps146-neutral-600">{formatDate(event.date)}</div>
                          <div className="font-medium text-ps146-navy-900 text-sm">{getEventTitle(event)}</div>
                        </div>
                      ))
                    ) : (
                      <p className="text-ps146-neutral-500 italic text-sm">No upcoming events</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Calendar */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-lg border-2 border-ps146-navy-100 overflow-hidden">

                {/* Calendar Header */}
                <div className="bg-ps146-coral-600 text-white px-6 py-5 flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    {currentView === 'week' ? (
                      (() => {
                        const { days } = getWeekDays();
                        const startLabel = `${days[0].toLocaleString('default', { month: 'short' })} ${days[0].getDate()}`;
                        const endLabel = `${days[6].toLocaleString('default', { month: 'short' })} ${days[6].getDate()}, ${days[6].getFullYear()}`;
                        return <h3 className="text-xl font-bold">Week of {startLabel} – {endLabel}</h3>;
                      })()
                    ) : (
                      <h3 className="text-2xl font-bold">{monthNames[currentMonth]} {currentYear}</h3>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={prevMonth}
                      className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextMonth}
                      className="p-2 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>

                {/* Calendar Grid Header */}
                <div className="grid grid-cols-7 text-center bg-ps146-navy-50 border-b-2 border-ps146-navy-100">
                  {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, i) => (
                    <div key={i} className="py-3 font-bold text-ps146-navy-900 text-sm">{day}</div>
                  ))}
                </div>

                {/* Month View */}
                {currentView === 'month' && (
                  <div className="grid grid-cols-7 auto-rows-fr min-h-[600px]">
                    {days.map((day, index) => {
                      const dayEvents = day ? getEventsForDay(day) : [];
                      const isToday = day && day.toDateString() === new Date().toDateString();
                      return (
                        <div key={index} className={`border-t border-l p-2 h-32 ${day ? 'bg-white' : 'bg-ps146-navy-50/30'} ${isToday ? 'bg-ps146-coral-50 ring-2 ring-inset ring-ps146-coral-600' : ''} ${index % 7 === 6 ? 'border-r' : ''} hover:bg-ps146-navy-50/50 transition-colors`}>
                          {day && (
                            <>
                              <div className={`text-right mb-1 text-sm font-semibold ${isToday ? 'text-ps146-coral-600' : 'text-ps146-navy-900'}`}>
                                {day.getDate()}
                              </div>
                              <div className="space-y-1 overflow-y-auto max-h-[80px]">
                                {dayEvents.map((event) => (
                                  <button
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`text-xs w-full text-left px-2 py-1 rounded text-white ${categoryColors[event.category]} hover:opacity-90 transition-opacity`}
                                    title={getEventTitle(event)}
                                  >
                                    <span className="truncate block">{getEventTitle(event)}</span>
                                  </button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Week View */}
                {currentView === 'week' && (() => {
                  const { days: weekDays } = getWeekDays();
                  return (
                    <div className="min-h-[600px]">
                      <div className="grid grid-cols-7 text-center bg-ps146-navy-50 border-b border-ps146-navy-200">
                        {weekDays.map((d, i) => (
                          <div key={i} className="py-2 font-medium text-ps146-navy-800">
                            <div>{['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()]}</div>
                            <div className="text-xs text-ps146-neutral-600">{d.toLocaleString('default', { month: 'short' })} {d.getDate()}</div>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-7 auto-rows-fr min-h-[520px]">
                        {weekDays.map((day, index) => {
                          const dayEvents = getEventsForDay(day);
                          const isToday = day.toDateString() === new Date().toDateString();
                          return (
                            <div key={index} className={`border-t border-l p-3 ${index % 7 === 6 ? 'border-r' : ''} ${isToday ? 'bg-ps146-coral-50 ring-2 ring-inset ring-ps146-coral-600' : 'bg-white'} hover:bg-ps146-navy-50/50 transition-colors`}>
                              <div className={`text-right mb-2 font-semibold ${isToday ? 'text-ps146-coral-600' : 'text-ps146-navy-900'}`}>
                                {day.getDate()}
                              </div>
                              <div className="space-y-2 overflow-y-auto max-h-[440px]">
                                {dayEvents.length === 0 && (
                                  <div className="text-xs text-ps146-neutral-400 italic">{language === 'es' ? 'Sin eventos' : 'No events'}</div>
                                )}
                                {dayEvents.map((event) => (
                                  <button
                                    key={event.id}
                                    onClick={() => setSelectedEvent(event)}
                                    className={`text-xs w-full text-left px-2 py-1 rounded text-white ${categoryColors[event.category]} hover:opacity-90 transition-opacity`}
                                    title={getEventTitle(event)}
                                  >
                                    <span className="truncate block">{getEventTitle(event)}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })()}

                {/* List View */}
                {currentView === 'list' && (
                  <div className="min-h-[600px] p-6">
                    <div className="space-y-4">
                      {getFilteredEvents()
                        .filter(event => event.date.getMonth() === currentMonth && event.date.getFullYear() === currentYear)
                        .sort((a, b) => a.date - b.date)
                        .map(event => (
                          <div
                            key={event.id}
                            className="flex border-l-4 p-4 bg-ps146-navy-50 rounded-r hover:shadow-lg transition-shadow cursor-pointer"
                            style={{
                              borderColor: event.category === 'holiday' ? '#b91c1c' : event.category === 'academic' ? '#31a3dd' : event.category === 'earlyDismissal' ? '#ea580c' : event.category === 'testing' ? '#7c3aed' : event.category === 'pta' ? '#ca8a04' : '#15803d'
                            }}
                            onClick={() => setSelectedEvent(event)}
                          >
                            <div className="mr-6 text-center min-w-[60px]">
                              <div className="font-bold text-2xl text-ps146-navy-900">{event.date.getDate()}</div>
                              <div className="text-xs text-ps146-neutral-600 uppercase">{event.date.toLocaleString('default', { month: 'short' })}</div>
                            </div>
                            <div className="flex-1">
                              <div className="font-bold text-ps146-navy-900 text-lg mb-1">{getEventTitle(event)}</div>
                              <div className="text-sm text-ps146-neutral-700 mb-2">
                                {event.allDay ? (language === 'es' ? 'Todo el día' : 'All Day') : `${event.startTime || ''}${event.startTime && event.endTime ? ' - ' : ''}${event.endTime || ''}`}
                              </div>
                              {getEventDescription(event) && (
                                <div className="text-sm text-ps146-neutral-600">{getEventDescription(event)}</div>
                              )}
                              <div className="mt-2">
                                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                  event.category === 'holiday' ? 'bg-red-100 text-red-900' :
                                  event.category === 'academic' ? 'bg-blue-100 text-blue-900' :
                                  event.category === 'earlyDismissal' ? 'bg-orange-100 text-orange-900' :
                                  event.category === 'testing' ? 'bg-purple-100 text-purple-900' :
                                  event.category === 'pta' ? 'bg-yellow-100 text-yellow-900' :
                                  'bg-green-100 text-green-900'
                                }`}>
                                  {language === 'es' ? getCategoryNameES(event.category) : getCategoryName(event.category)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-ps146-navy-900/75 backdrop-blur-sm transition-opacity" onClick={closeModal}></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className={`${categoryColors[selectedEvent.category]} py-6 px-8`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">{getEventTitle(selectedEvent)}</h3>
                    <p className="text-white/90 mt-2">{formatDate(selectedEvent.date)}</p>
                  </div>
                  <button onClick={closeModal} className="text-white/80 hover:text-white transition-colors">
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="bg-white px-8 py-6">
                <div className="space-y-4">
                  {getEventDescription(selectedEvent) && (
                    <p className="text-ps146-neutral-700 leading-relaxed">{getEventDescription(selectedEvent)}</p>
                  )}
                  {(selectedEvent.time || selectedEvent.startTime || selectedEvent.endTime || selectedEvent.allDay) && (
                    <div className="flex items-center text-ps146-neutral-600">
                      <CalendarIcon className="h-5 w-5 mr-2 text-ps146-coral-600" />
                      <span>{selectedEvent.allDay ? (language === 'es' ? 'Todo el día' : 'All Day') : (selectedEvent.time ? selectedEvent.time : `${selectedEvent.startTime || ''}${selectedEvent.startTime && selectedEvent.endTime ? ' - ' : ''}${selectedEvent.endTime || ''}`)}</span>
                    </div>
                  )}
                  {selectedEvent.location && (
                    <div className="flex items-center text-ps146-neutral-600">
                      <svg className="h-5 w-5 mr-2 text-ps146-coral-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>{selectedEvent.location}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="bg-ps146-navy-50 px-8 py-4 flex justify-end gap-4">
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-white border-2 border-ps146-navy-200 rounded-lg text-ps146-navy-800 font-semibold hover:bg-ps146-navy-50 transition-colors"
                >
                  Close
                </button>
                {selectedEvent.link && (
                  <a
                    href={selectedEvent.link}
                    className="px-6 py-3 bg-ps146-coral-600 rounded-lg text-white font-semibold hover:bg-ps146-coral-700 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    More Details
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-ps146-navy-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-ps146-coral-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">146</span>
                </div>
                <div>
                  <div className="font-bold text-xl text-white">PS 146</div>
                  <div className="text-sm text-gray-400">Anna M. Short</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Serving the East Harlem community with excellence in education and multicultural support.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="/about" className="hover:text-ps146-coral-400 transition-colors">About Us</a></li>
                <li><a href="/admissions" className="hover:text-ps146-coral-400 transition-colors">Admissions</a></li>
                <li><a href="/lmc" className="hover:text-ps146-coral-400 transition-colors">Library</a></li>
                <li><a href="/supply-lists" className="hover:text-ps146-coral-400 transition-colors">Supply Lists</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Resources</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="https://classroom.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-ps146-coral-400 transition-colors">Google Classroom</a></li>
                <li><a href="https://www.classdojo.com" target="_blank" rel="noopener noreferrer" className="hover:text-ps146-coral-400 transition-colors">Class Dojo</a></li>
                <li><a href="/school-calendar" className="hover:text-ps146-coral-400 transition-colors">School Calendar</a></li>
                <li><a href="/news" className="hover:text-ps146-coral-400 transition-colors">News & Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white text-lg">Contact Info</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <p className="text-white">421 E. 106th Street</p>
                <p className="text-white">New York, NY 10029</p>
                <p className="mt-4 text-ps146-coral-400 font-semibold text-lg">
                  (212) 860-5877
                </p>
                <p>Mon-Fri: 8:00AM-2:20PM</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
            <p>&copy; 2024 PS 146 Anna M. Short. All Rights Reserved. | Proudly created with PS146.org</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default SchoolCalendar;
