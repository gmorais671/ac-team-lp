type Testimonial = {
  title: string;
  description: string;
  images: { file: string; alt: string; label?: string }[];
};

export const testimonials: Testimonial[] = [
  {
    title: "Uma evolução em dois registros",
    description: "Duas etapas da trajetória de um aluno, lado a lado.",
    images: [
      { file: "3a1dfed5-d36b-4404-9018-5c8d7e4d2c0a", alt: "Primeiro registro da evolução física de um aluno ACTeam", label: "Antes" },
      { file: "4f8ccb11-2395-4e3a-95a1-331a724123a2", alt: "Registro posterior da evolução física do mesmo aluno ACTeam", label: "Depois" },
    ],
  },
  {
    title: "Uma conquista para compartilhar",
    description: "A medalha e a mensagem de agradecimento depois da prova.",
    images: [
      { file: "a5302bef-34ee-48c7-b463-d34954a56c1a", alt: "Aluno ACTeam segurando a medalha após uma prova", label: "A conquista" },
      { file: "IMG_7194", alt: "Mensagem do mesmo aluno agradecendo pelo acompanhamento e relatando a prova", label: "O relato" },
    ],
  },
  {
    title: "Vitórias dentro e fora do treino",
    description: "Dois momentos de uma atleta dividindo suas conquistas com o treinador.",
    images: [
      { file: "IMG_7196", alt: "Conversa com atleta ACTeam mostrando uma medalha em competição" },
      { file: "IMG_7197", alt: "Segundo registro da mesma atleta ACTeam compartilhando suas medalhas" },
    ],
  },
  ...[
    ["IMG_7192", "Motivação para continuar", "Uma mensagem sobre a evolução e o entusiasmo com o acompanhamento."],
    ["IMG_7193", "Um plano que cabe na rotina", "Feedback sobre a praticidade do protocolo alimentar."],
    ["IMG_7198", "Meta compartilhada", "O registro de uma meta de peso alcançada, enviado ao treinador."],
    ["IMG_7200", "Os primeiros passos", "Um relato sobre a primeira semana de treino e a adaptação aos exercícios."],
    ["IMG_7201", "Acompanhamento de perto", "Uma conversa sobre o ritmo dos treinos e a adaptação ao protocolo."],
    ["IMG_7202", "Constância no dia a dia", "O relato de quem está construindo uma rotina de treino e alimentação."],
    ["IMG_7204", "Cada atualização conta", "Um aluno compartilha os registros do seu progresso durante as semanas."],
    ["IMG_7206", "Dedicação ao processo", "Uma atualização sobre treino, alimentação e evolução."],
    ["IMG_7207", "A satisfação de evoluir", "Uma mensagem de gratidão ao perceber o próprio progresso."],
  ].map(([file, title, description]) => ({ title, description, images: [{ file, alt: `Depoimento de aluno ACTeam: ${description}` }] })),
];
