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
  }
];

export default events;
