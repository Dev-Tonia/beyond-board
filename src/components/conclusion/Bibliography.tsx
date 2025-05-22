import React from "react";
import ThirdHeading from "../common/ThirdHeading";
const references = [
  {
    text: "Agubuzo, N. N. A. (2024). The perceptions of US-based Nigerian women leaders in healthcare administration: An exploratory case study (Doctoral dissertation, University of Phoenix).",
  },
  {
    text: "Arthur, J. A. (2000). Invisible sojourners: African immigrant diaspora in the United States. Praeger.",
  },
  {
    text: "Arthur, J. A. (2014). Class formations and inequality structures in contemporary African migration: Evidence from Ghana and Nigeria. Lexington Books.",
  },
  {
    text: "Bashi, V. (2007). Survival of the knitted: Immigrant social networks in a stratified world. Stanford University Press.",
  },
  {
    text: "Batalova, J., & Zong, J. (2017). Sub-Saharan African immigrants in the United States. Migration Policy Institute.",
  },
  {
    text: "Bayor, S. (2018). The experiences of highly educated Nigerian immigrants in the United States (Senior Project No. 281). Senior Projects Spring 2018.",
  },
  {
    text: "Capps, R., McCabe, K., & Fix, M. (2012). Diverse streams: African migration to the United States. Migration Policy Institute.",
  },
  {
    text: "Corra, M. (2023). Immigration from Africa to the United States: Key insights from recent research. Frontiers in Sociology, 8, 1171818.",
  },
  {
    text: "Creswell, J. W., & Poth, C. N. (2016). Qualitative inquiry and research design: Choosing among five approaches. Sage publications.",
  },
  {
    text: "Elo, I. T., Frankenberg, E., Gansey, R., & Thomas, D. (2015). Africans in the American labor market. Demography, 52(5), 1513–1542.",
  },
  {
    text: "Kebede, K. H. (Ed.). (2020). Identity and transnationalism: The new African diaspora second generation in the United States. Routledge.",
  },
  {
    text: "Maryland Population and Migration Trends. (2023). State of the Economy Report. Office of the Comptroller, Maryland.",
  },
  {
    text: "Migration Policy Institute. (2015). The Nigerian diaspora in the United States (RAD Diaspora Profile No. 1-7).",
  },
  {
    text: "Ogomaka, S. (2019). Immigrant Nigerian women leaders in California: Their experiences, challenges, and successes (Doctoral dissertation, Pepperdine University).",
  },
  {
    text: "Okome, M. O. (2012). Plus Adesanmi. In West African migrations: Transnational and global pathways in a new century (p. 247).",
  },
  {
    text: "Oleribe, O. O., & de la Fuente, R. A. (2022). Migration of highly skilled workers: Personal perspectives. The Pan African Medical Journal, 41, 292.",
  },
  {
    text: "Oyebamiji, S. I., & Asuelime, R. A. (2019). Nigerian migration to the United States of America: A contemporary perspective. Journal of African Foreign Affairs, 6(1).",
  },
  {
    text: "Ozoude, I. L. (2020). Exploring the career experiences of immigrant Nigerian women engineers (Doctoral dissertation, Walden University).",
  },
  {
    text: "Thomas, K. J. (2010). Racial and ethnic disparities in education–occupation mismatch status among immigrants in South Africa and the United States. Journal of International Migration and Integration, 11, 383–401.",
  },
];
const Bibliography = () => {
  return (
    <section className=" py-12 bg-[#F3F9EB]">
      <div className="wrapper">
        <ThirdHeading title="References" textColor=" text-neutral-800" />
        <div className="space-y-4 italic">
          {references.map((reference, index) => (
            <div key={index} className="text-gray-700 leading-relaxed">
              <p className="lg:text-xl text-lg 2xl:text-2xl">
                {reference.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bibliography;
