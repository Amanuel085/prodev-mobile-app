import { PropertyListingProps } from "@/interfaces";

const SAMPLE_DATA: PropertyListingProps[] = [
  {
    propertyName: "Villa Arrciffee Beach House",
    location: {
      street: "123 Ocean Drive",
      city: "Miami",
      country: "USA"
    },
    rate: 4.76,
    currency: "$",
    amount: 620,
    favorite: false
  },
  // ... (add the rest of the sample data)
];

const FILTERS: string[] = [
  "Mansion",
  "CountrySide",
  "Villa",
  "Tropical",
  "New",
  "Amazing",
  "Beachfront",
  "Luxury",
  "Family-Friendly",
  "Pet-Friendly",
  "Secluded"
];

export { SAMPLE_DATA, FILTERS };