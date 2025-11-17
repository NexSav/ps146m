// School Calendar Events for PS 146 Anna M. Short
// 2024-2025 School Year

const events = [
  // November 2024
  {
    id: 1,
    title: "Thanksgiving Break - No School",
    titleES: "Receso de Acción de Gracias - No hay clases",
    date: new Date(2024, 10, 28),
    category: "holiday",
    allDay: true,
    description: "School closed for Thanksgiving holiday",
    descriptionES: "Escuela cerrada por festividad de Acción de Gracias"
  },
  {
    id: 2,
    title: "Thanksgiving Break - No School",
    titleES: "Receso de Acción de Gracias - No hay clases",
    date: new Date(2024, 10, 29),
    category: "holiday",
    allDay: true,
    description: "School closed for Thanksgiving holiday",
    descriptionES: "Escuela cerrada por festividad de Acción de Gracias"
  },

  // December 2024
  {
    id: 3,
    title: "Winter Break Begins",
    titleES: "Comienza el receso de invierno",
    date: new Date(2024, 11, 23),
    category: "holiday",
    allDay: true,
    description: "Last day before winter break",
    descriptionES: "Último día antes del receso de invierno"
  },
  {
    id: 4,
    title: "Winter Break - No School",
    titleES: "Receso de invierno - No hay clases",
    date: new Date(2024, 11, 24),
    category: "holiday",
    allDay: true,
    description: "School closed for winter break",
    descriptionES: "Escuela cerrada por receso de invierno"
  },
  {
    id: 5,
    title: "Christmas Day - No School",
    titleES: "Día de Navidad - No hay clases",
    date: new Date(2024, 11, 25),
    category: "holiday",
    allDay: true,
    description: "School closed for Christmas",
    descriptionES: "Escuela cerrada por Navidad"
  },

  // January 2025
  {
    id: 6,
    title: "New Year's Day - No School",
    titleES: "Día de Año Nuevo - No hay clases",
    date: new Date(2025, 0, 1),
    category: "holiday",
    allDay: true,
    description: "School closed for New Year's Day",
    descriptionES: "Escuela cerrada por Día de Año Nuevo"
  },
  {
    id: 7,
    title: "School Resumes",
    titleES: "Regresan las clases",
    date: new Date(2025, 0, 6),
    category: "academic",
    allDay: true,
    description: "Students return from winter break",
    descriptionES: "Los estudiantes regresan del receso de invierno"
  },
  {
    id: 8,
    title: "Martin Luther King Jr. Day - No School",
    titleES: "Día de Martin Luther King Jr. - No hay clases",
    date: new Date(2025, 0, 20),
    category: "holiday",
    allDay: true,
    description: "School closed in observance of MLK Day",
    descriptionES: "Escuela cerrada en conmemoración del Día de MLK"
  },

  // February 2025
  {
    id: 9,
    title: "Midwinter Break - No School",
    titleES: "Receso de medio invierno - No hay clases",
    date: new Date(2025, 1, 17),
    category: "holiday",
    allDay: true,
    description: "School closed for midwinter recess",
    descriptionES: "Escuela cerrada por receso de medio invierno"
  },
  {
    id: 10,
    title: "Midwinter Break - No School",
    titleES: "Receso de medio invierno - No hay clases",
    date: new Date(2025, 1, 18),
    category: "holiday",
    allDay: true,
    description: "School closed for midwinter recess",
    descriptionES: "Escuela cerrada por receso de medio invierno"
  },
  {
    id: 11,
    title: "Midwinter Break - No School",
    titleES: "Receso de medio invierno - No hay clases",
    date: new Date(2025, 1, 19),
    category: "holiday",
    allDay: true,
    description: "School closed for midwinter recess",
    descriptionES: "Escuela cerrada por receso de medio invierno"
  },
  {
    id: 12,
    title: "Midwinter Break - No School",
    titleES: "Receso de medio invierno - No hay clases",
    date: new Date(2025, 1, 20),
    category: "holiday",
    allDay: true,
    description: "School closed for midwinter recess",
    descriptionES: "Escuela cerrada por receso de medio invierno"
  },
  {
    id: 13,
    title: "Midwinter Break - No School",
    titleES: "Receso de medio invierno - No hay clases",
    date: new Date(2025, 1, 21),
    category: "holiday",
    allDay: true,
    description: "School closed for midwinter recess",
    descriptionES: "Escuela cerrada por receso de medio invierno"
  },

  // March 2025
  {
    id: 14,
    title: "Parent-Teacher Conferences",
    titleES: "Conferencias de padres y maestros",
    date: new Date(2025, 2, 14),
    category: "academic",
    startTime: "3:00 PM",
    endTime: "7:00 PM",
    description: "Evening parent-teacher conferences",
    descriptionES: "Conferencias de padres y maestros por la tarde"
  },

  // April 2025
  {
    id: 15,
    title: "Spring Break - No School",
    titleES: "Receso de primavera - No hay clases",
    date: new Date(2025, 3, 14),
    category: "holiday",
    allDay: true,
    description: "School closed for spring recess",
    descriptionES: "Escuela cerrada por receso de primavera"
  },
  {
    id: 16,
    title: "Spring Break - No School",
    titleES: "Receso de primavera - No hay clases",
    date: new Date(2025, 3, 15),
    category: "holiday",
    allDay: true,
    description: "School closed for spring recess",
    descriptionES: "Escuela cerrada por receso de primavera"
  },
  {
    id: 17,
    title: "Spring Break - No School",
    titleES: "Receso de primavera - No hay clases",
    date: new Date(2025, 3, 16),
    category: "holiday",
    allDay: true,
    description: "School closed for spring recess",
    descriptionES: "Escuela cerrada por receso de primavera"
  },
  {
    id: 18,
    title: "Spring Break - No School",
    titleES: "Receso de primavera - No hay clases",
    date: new Date(2025, 3, 17),
    category: "holiday",
    allDay: true,
    description: "School closed for spring recess",
    descriptionES: "Escuela cerrada por receso de primavera"
  },
  {
    id: 19,
    title: "Spring Break - No School",
    titleES: "Receso de primavera - No hay clases",
    date: new Date(2025, 3, 18),
    category: "holiday",
    allDay: true,
    description: "School closed for spring recess",
    descriptionES: "Escuela cerrada por receso de primavera"
  },

  // May 2025
  {
    id: 20,
    title: "Memorial Day - No School",
    titleES: "Día de los Caídos - No hay clases",
    date: new Date(2025, 4, 26),
    category: "holiday",
    allDay: true,
    description: "School closed for Memorial Day",
    descriptionES: "Escuela cerrada por Día de los Caídos"
  },

  // June 2025
  {
    id: 21,
    title: "Last Day of School",
    titleES: "Último día de clases",
    date: new Date(2025, 5, 26),
    category: "academic",
    allDay: true,
    description: "Final day of the 2024-2025 school year",
    descriptionES: "Último día del año escolar 2024-2025"
  },

  // Sample PTA and After-School Events
  {
    id: 22,
    title: "PTA Meeting",
    titleES: "Reunión de PTA",
    date: new Date(2024, 11, 12),
    category: "pta",
    startTime: "6:00 PM",
    endTime: "7:30 PM",
    description: "Monthly PTA meeting - all parents welcome",
    descriptionES: "Reunión mensual de PTA - todos los padres son bienvenidos",
    location: "School Auditorium"
  },
  {
    id: 23,
    title: "After-School Program Registration",
    titleES: "Inscripción para programa después de clases",
    date: new Date(2025, 0, 15),
    category: "afterSchool",
    startTime: "3:00 PM",
    endTime: "5:00 PM",
    description: "Registration for spring after-school programs",
    descriptionES: "Inscripción para programas de primavera después de clases"
  },

  // November 2025
  {
    id: 24,
    title: "National School Psychologist Day",
    titleES: "Día Nacional del Psicólogo Escolar",
    date: new Date(2025, 10, 3),
    category: "academic",
    allDay: true,
    description: "Celebrating our school psychologists",
    descriptionES: "Celebrando a nuestros psicólogos escolares"
  },
  {
    id: 25,
    title: "Election Day - No Students in Attendance",
    titleES: "Día de las elecciones - No hay estudiantes presentes",
    date: new Date(2025, 10, 4),
    category: "holiday",
    allDay: true,
    description: "School closed for students - Election Day",
    descriptionES: "Escuela cerrada para estudiantes - Día de las elecciones"
  },
  {
    id: 26,
    title: "Virtual Parent-Teacher Conference - Half Day",
    titleES: "Conferencia virtual de padres y maestros - Medio día",
    date: new Date(2025, 10, 6),
    category: "academic",
    startTime: "12:20 PM",
    endTime: "7:30 PM",
    description: "Virtual Parent-Teacher Conference: 12:20 PM-2:20 PM and 4:30 PM-7:30 PM. HALF DAY FOR ALL STUDENTS",
    descriptionES: "Conferencia virtual de padres y maestros: 12:20 PM-2:20 PM y 4:30 PM-7:30 PM. MEDIO DÍA para todos los estudiantes"
  },
  {
    id: 27,
    title: "NY Pride Day",
    titleES: "Día del Orgullo de Nueva York",
    date: new Date(2025, 10, 7),
    category: "academic",
    allDay: true,
    description: "New York Pride Day celebration",
    descriptionES: "Celebración del Día del Orgullo de Nueva York"
  },
  {
    id: 28,
    title: "Respect for Paraprofessional Day - Wear Blue",
    titleES: "Día de Respeto al Paraprofesional - Vestir de azul",
    date: new Date(2025, 10, 10),
    category: "academic",
    allDay: true,
    description: "Show respect for our paraprofessionals - Wear Blue",
    descriptionES: "Muestra respeto a nuestros paraprofesionales - Vestir de azul"
  },
  {
    id: 29,
    title: "Veteran's Day - School Closed",
    titleES: "Día de los veteranos - Escuela cerrada",
    date: new Date(2025, 10, 11),
    category: "holiday",
    allDay: true,
    description: "School closed in observance of Veteran's Day",
    descriptionES: "Escuela cerrada en conmemoración del Día de los veteranos"
  },
  {
    id: 30,
    title: "World Kindness Day",
    titleES: "Día Mundial de la Amabilidad",
    date: new Date(2025, 10, 13),
    category: "academic",
    allDay: true,
    description: "Celebrating World Kindness Day",
    descriptionES: "Celebrando el Día Mundial de la Amabilidad"
  },
  {
    id: 31,
    title: "Achievement Assembly - Students Only",
    titleES: "Asamblea de Logros - Solo para estudiantes",
    date: new Date(2025, 10, 14),
    category: "academic",
    startTime: "9:30 AM",
    endTime: "9:50 AM",
    description: "Achievement Assembly: 9:30 AM Grades K-2, 9:50 AM Grades 3-5 - For students only",
    descriptionES: "Asamblea de Logros: 9:30 AM Grados K-2, 9:50 AM Grados 3-5 - Solo para estudiantes"
  },
  {
    id: 32,
    title: "Bio Bus Visit",
    titleES: "Visita al Bio Bus",
    date: new Date(2025, 10, 25),
    category: "academic",
    allDay: true,
    description: "Bio Bus visits our school",
    descriptionES: "El Bio Bus visita nuestra escuela"
  },
  {
    id: 33,
    title: "Bio Bus Visit & MACY's Day Parade",
    titleES: "Visita al Bio Bus y Desfile del Día de Acción de Gracias de MACY",
    date: new Date(2025, 10, 26),
    category: "academic",
    startTime: "8:15 AM",
    endTime: "2:15 PM",
    description: "Bio Bus Visit, MACY's Day Parade & Family Potluck. PA Meeting in Library @ 8:15. No After School Dismissal - ALL STUDENTS will be dismissed @2:15 p.m.",
    descriptionES: "Visita al Bio Bus, Desfile del Día de Acción de Gracias de MACY y Convivio familiar compartida. Reunión de la Asociación de Padres en la Biblioteca a las 8:15 a.m. NO HABRÁ AFTER SCHOOL - SALIDA PARA TODOS LOS ESTUDIANTES es a las 2:15 p.m."
  },
  {
    id: 34,
    title: "Thanksgiving Day - No School",
    titleES: "Día de Acción de Gracias - No hay clases",
    date: new Date(2025, 10, 27),
    category: "holiday",
    allDay: true,
    description: "School closed for Thanksgiving Day",
    descriptionES: "Escuela cerrada por Día de Acción de Gracias"
  },
  {
    id: 35,
    title: "Thanksgiving Break - No School",
    titleES: "Receso de Acción de Gracias - No hay clases",
    date: new Date(2025, 10, 28),
    category: "holiday",
    allDay: true,
    description: "School closed for Thanksgiving Break",
    descriptionES: "Escuela cerrada por receso de Acción de Gracias"
  }
];

export default events;
