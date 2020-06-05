import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

import './Histoire.css';

const Histoire = () => (
  <div className="history">
    <h5> Histoire </h5>
    <div className="p-1  bg-primary my-3 rounded">
      <Toast>
        <ToastHeader>
          La langue des signes, un code gestuel
        </ToastHeader>
        <ToastBody>
          Dans l’Antiquité, l’intelligence était étroitement liée à la parole. Aristote pensait que quelqu’un qui ne parle pas, ne peut pas penser.
          Les sourds, isolés, n’ont pu enrichir leurs langues signées et ont dû se contenter d’une gestuelle simpliste. De ce fait, ne disposant pas d’une langue élaborée et ne bénéficiant pas d’éducation, ils passaient parfois pour simples d’esprit.
          {' '}
        </ToastBody>
      </Toast>
    </div>
    <div className="p-1  bg-secondary my-3 rounded">
      <Toast>
        <ToastHeader>
          A partir du 16ème siècle : les précepteurs
        </ToastHeader>
        <ToastBody>
          A partir du 16ème siècle, des peintres sourds tels que Navarette ou Pinturicchio ont été reconnus. Par ailleurs, en Espagne, des enfants sourds issus de la noblesse ont été instruits par des précepteurs. L’un d’entre eux, Pedro Ponce de Leon s’intéressa aux codes gestuels existants tel que l’alphabet manuel et les utilisa pour enseigner auprès de ces enfants.
          D’autres précepteurs mirent plutôt l’accent sur l’apprentissage de la parole.
        </ToastBody>
      </Toast>
    </div>
    <div className="p-1  bg-success my-3 rounded">
      <Toast>
        <ToastHeader>
          Le 18ème siècle : L’abbé de l’Epée
        </ToastHeader>
        <ToastBody>
          L’Abbée de l’épée fut, en 1760, le premier entendant connu à s’intéresser aux modes de communication des  sourds-muets». En observant un couple de jumelles sourdes communiquer entre elles par gestes il découvre l’existence d’une langue des signes. Il décide de s’appuyer sur cette langue pour instruire les enfants sourds. Il l’adapte en y ajoutant des notions grammaticales propres au français (par exemple, la conjugaison).
          C’est ce qu’il appelle les « signes méthodistes».

          Par ailleurs, il regroupe les enfants sourds pour les instruire et ouvre une véritable école pour sourds qui deviendra l’Institut national des jeunes sourds, aujourd’hui Institut Saint-Jacques, à Paris.

          L’abbée de l’Epée est aujourd’hui une figure historique de l’histoire des Sourds. Sa figure est connue des Sourds dans le monde entier.
        </ToastBody>
      </Toast>
    </div>
    <div className="p-1  bg-danger  my-3 rounded">
      <Toast>
        <ToastHeader>
          1880 : le congrès de Milan
        </ToastHeader>
        <ToastBody>
          Dans la même période, le courant « oraliste » s’amplifie. Les « oralistes » pensent que les sourds doivent apprendre à parler pour s’intégrer dans la société. Le congrès de Milan en 1880 où l’immense majorité des participants est entendante et oraliste a décrété que la méthode orale pure doit préférée.

          Trois raisons sont invoquées :

          la LSF n’est pas une vraie langue,
          elle ne permet pas de parler de Dieu,
          les signes empêchent les sourds de bien respirer ce qui favorise la tuberculose.
          Cette préférence a eu des conséquences dramatiques pour les sourds : pendant 100 ans la langue des signes a été proscrite, méprisée et marginalisée aux seules associations de sourds. Dans les instituts de sourds, les élèves signent en cachette. La langue des signes s’est alors appauvrie.        
        </ToastBody>
      </Toast>
    </div>
    <div className="p-1  bg-warning  my-3 rounded">
      <Toast>
        <ToastHeader>
          Les années 80 : le réveil sourd
        </ToastHeader>
        <ToastBody>
          Durant les années 1980, se produit ce que les sourds appellent le Réveil Sourd.

          La langue des signes commence à reconquérir ses lettres de noblesse avec William Stokoe, linguiste, qui étudie la langue des signes comme une véritable langue. Des chercheurs en linguistique et en sociologie tels que Christian Cuxac et Bernard Mottez poursuivent ce travail et mettent en avant la culture sourde qui y est rattachée.

          Par ailleurs, un travail culturel est mené par Jean Gremion (écrivain, journaliste et metteur en scène) et Alfredo Corrado (un artiste sourd américain). Ils créent en 1976, l’International Visual Theatre (IVT). Dès lors, ils travaillent à la requalification de la langue des signes.

          En parallèle, une réflexion est menée sur l’enseignement auprès des élèves sourds. La philosophie bilingue (LSF / Français) commence à germer dans les esprits. En 1980 est crée l’association « 2 Langues pour une Education ». Elle met en place des « stages d’été pour les parents». Ces stages rassemblent des parents d’enfants sourds, des sourds, des interprètes. Ils oeuvrent ensemble à la création des premières classes bilingues dans un contexte législatif et sociologique difficile.        
        </ToastBody>
      </Toast>
    </div>
    <div className="p-1  bg-info  my-3 rounded">
      <Toast>
        <ToastHeader>
          Les années 90 : le début de la médiatisation de la LSF
        </ToastHeader>
        <ToastBody>
          Dans les années 90, les sourds et la LSF commencent à avoir une renommée dans le grand public.

          En 1992, un numéro de la « La marche du siècle » est consacré aux sourds. Les français découvrent alors cette communauté et cette langue à travers les témoignages de Victor Abbou et Joël Chalude.
          Puis Emmanuelle Laborit comédienne sourde, reçoit en 1993, le Molière de la révélation théatrale pour son rôle dans Les Enfants du silence.

          Cette même année, le documentaire « Le pays des sourds » de Nicolas Philibert montre cet univers inconnu des entendants.

          Pendant ces années, de nombreuses associations de sourds ouvrent leurs portes aux entendants en leurs proposant des cours de langue de signes. Ces formations, les films, le théatre et l’engagement de plusieurs associations dans la sensibilisation pour la culture sourde, permet une meilleure reconnaissance des droits des sourds.

          Dans le même temps, le métier d’interprète en LSF/français se professionnalise et est validé par un diplôme.

          De son côté 2LPE continue à militer pour le bilinguisme dans l’éducation. En 1988, voit naître à Poitiers, 2LPE Centre Ouest qui oeuvre pour la mise en place de classes bilingues, la promotion et la reconnaissance la Langue des Signes comme langue à part entière.
        </ToastBody>
      </Toast>
    </div>
    <div className="p-1  bg-dark  my-3 rounded">
      <Toast>
        <ToastHeader>
          Les années 2000 : la LSF, langue à part entière
        </ToastHeader>
        <ToastBody>
          Progressivement les mentalités et les représentations évoluent.

          Yves Delaporte, ethnologue, se penche lui aussi sur la communauté sourde et la LSF. Il publiera en 2007 un « Dictionnaire étymologique et historique de la langue des signes française. »

          De son côté 2LPE organise tous les ans des Universités d’été sur le thème du bilinguisme où la LSF est la première langue.

          Les combats menés depuis 25 ans pour la reconnaissance de la langue des signes commencent à porter leurs fruits : la Loi n°2005-102 du 11 février 2005 reconnaît la LSF comme « langue à part entière ».

          En 2008, la LSF devient une option pour le Bac, comme n’importe quelle autre langue. En 2010, le CAPES de LSF est créé.

          En 2012, c’est l’année du 300ème anniversaire de la naissance de l’Abbé de l’Epée. De multiples hommages lui ont été rendus par les Sourds.
          Cette même année, Emmanuelle Laborit (directrice de l’IVT depuis 2003) est devenue officier de l’Ordre des Arts et des Lettres.
        </ToastBody>
      </Toast>
    </div>
  </div>
);

export default Histoire;
