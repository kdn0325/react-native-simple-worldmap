# react-native-simple-worldmap

This is SVG's Simple Map that makes React Native

<video width="500" height="500" autoplay>
  <source src="https://github.com/user-attachments/assets/54e27209-e06a-4590-ad95-1f5eba5cf013" type="video/mp4">
</video>

## Installation

```sh
npm install react-native-simple-worldmap
# or
yarn add react-native-simple-worldmap
```

## Usage

```js
import { WorldMap } from 'react-native-simple-worldmap';
import { View, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <WorldMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## Props

| Name              | Type     | Default   | Note                                                                                                                                                                                                                            |
| ----------------- | -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **color**         | String   | #00B386   | The default color of the countries on the map. If not provided, it will use the default color.                                                                                                                                  |
| **isSelectable**  | Boolean  | #FFFFFF   | Determines whether the countries on the map are selectable or not. If set to true, users can click on countries to change their color. Defaults to false if not provided.                                                       |
| **selectedColor** | String   | undefined | The color applied to a country when it is selected. If isSelectable is true, this color will be used for the selected country. Defaults to #9270FF if not provided.                                                             |
| **countries**     | string[] | Optional  | An optional array of country IDs (ISO 3166-1 alpha-2 codes) that should be highlighted or marked on the map. If provided, these countries will be displayed with the selectedColor. Defaults to an empty array if not provided. |

## Countries

| Name                             | Code / ID    |
| -------------------------------- | ------------ |
| Afghanistan                      | af           |
| Albania                          | al           |
| Algeria                          | dz           |
| Angola                           | ao           |
| Argentina                        | ar           |
| Armenia                          | am           |
| Australia                        | au           |
| Austria                          | at           |
| Azerbaijan                       | az           |
| Bahamas                          | bs           |
| Bangladesh                       | bd           |
| Belarus                          | by           |
| Belgium                          | be           |
| Belize                           | bz           |
| Benin                            | bj           |
| Bhutan                           | bt           |
| Bolivia                          | bo           |
| Bosnia and Herzegowina           | ba           |
| Botswana                         | bw           |
| Brazil                           | br           |
| Brunei                           | bn           |
| Bulgaria                         | bg           |
| Burkina Faso                     | bf           |
| Burundi                          | bi           |
| Cambodia                         | kh           |
| Cameroon                         | cm           |
| Canada                           | ca           |
| Central African Republic         | cf           |
| Chad                             | td           |
| Chile                            | cl           |
| China                            | cn           |
| Colombia                         | co           |
| Congo                            | cg           |
| Costa Rica                       | cr           |
| Cote d'Ivoire                    | ci           |
| Croatia                          | hr           |
| Cuba                             | cu           |
| Cyprus                           | cy           |
| Czech                            | cz           |
| Democratic Republic of the Congo | cd           |
| Denmark                          | dk           |
| Djibouti                         | dj           |
| Dominican Republic               | do           |
| Ecuador                          | ec           |
| Egypt                            | eg           |
| El Salvador                      | sv           |
| Equatorial Guinea                | gq           |
| Eritrea                          | er           |
| Estonia                          | ee           |
| Ethiopia                         | et           |
| Falkland Islands                 | fk           |
| Fiji                             | fj           |
| Finland                          | fi           |
| Fr. S. Antarctic Lands           | tf           |
| France                           | fr           |
| Gabon                            | ga           |
| Gambia                           | gm           |
| Georgia                          | ge           |
| Germany                          | de           |
| Ghana                            | gh           |
| Greece                           | gr           |
| Greenland                        | gl           |
| Guatemala                        | gt           |
| Guinea                           | gn           |
| Guinea-Bissau                    | gw           |
| Guyana                           | gy           |
| Haiti                            | ht           |
| Honduras                         | hn           |
| Hungary                          | hu           |
| Iceland                          | is           |
| India                            | in           |
| Indonesia                        | id           |
| Iran                             | ir           |
| Iraq                             | iq           |
| Ireland                          | ie           |
| Israel                           | il           |
| Italy                            | it           |
| Jamaica                          | jm           |
| Japan                            | jp           |
| Jordan                           | jo           |
| Kazakhstan                       | kz           |
| Kenya                            | ke           |
| Kuwait                           | kw           |
| Kyrgyzstan                       | kg           |
| Laos                             | la           |
| Latvia                           | lv           |
| Lebanon                          | lb           |
| Lesotho                          | ls           |
| Liberia                          | lr           |
| Libya                            | ly           |
| Lithuania                        | lt           |
| Luxembourg                       | lu           |
| Macedonia                        | mk           |
| Madagascar                       | mg           |
| Malawi                           | mw           |
| Malaysia                         | my           |
| Mali                             | ml           |
| Malta                            | mt           |
| Mauritania                       | mr           |
| Mexico                           | mx           |
| Moldova                          | md           |
| Mongolia                         | mn           |
| Montenegro                       | me           |
| Morocco                          | ma           |
| Mozambique                       | mz           |
| Myanmar                          | mm           |
| Namibia                          | na           |
| Nepal                            | np           |
| Netherlands                      | nl           |
| New Caledonia                    | nc           |
| New Zealand                      | nz           |
| Nicaragua                        | ni           |
| Niger                            | ne           |
| Nigeria                          | ng           |
| North Korea                      | kp           |
| Norway                           | no           |
| Oman                             | om           |
| Pakistan                         | pk           |
| Palestine                        | ps           |
| Panama                           | pa           |
| Papua New Guinea                 | pg           |
| Paraguay                         | py           |
| Peru                             | pe           |
| Philippines                      | ph           |
| Poland                           | pl           |
| Portugal                         | pt           |
| Puerto Rico                      | pr           |
| Qatar                            | qa           |
| Romania                          | ro           |
| Russia                           | ru           |
| Rwanda                           | rw           |
| Saudi Arabia                     | sa           |
| Senegal                          | sn           |
| Serbia                           | rs           |
| Sierra Leone                     | sl           |
| Singapore                        | sg           |
| Slovakia                         | sk           |
| Slovenia                         | si           |
| Solomon Islands                  | sb           |
| Somalia                          | so           |
| Somaliland                       | \_somaliland |
| South Africa                     | za           |
| South Korea                      | kr           |
| South Sudan                      | ss           |
| Spain                            | es           |
| Sri Lanka                        | lk           |
| Sudan                            | sd           |
| Suriname                         | sr           |
| Swaziland                        | sz           |
| Sweden                           | se           |
| Switzerland                      | ch           |
| Syria                            | sy           |
| Taiwan                           | tw           |
| Tajikistan                       | tj           |
| Tanzania                         | tz           |
| Thailand                         | th           |
| Timor-Leste                      | tl           |
| Togo                             | tg           |
| Trinidad and Tobago              | tt           |
| Tunisia                          | tn           |
| Turkey                           | tr           |
| Turkmenistan                     | tm           |
| Uganda                           | ug           |
| Ukraine                          | ua           |
| United Arab Emirates             | ae           |
| United Kingdom                   | gb           |
| United States                    | us           |
| Uruguay                          | uy           |
| Uzbekistan                       | uz           |
| Vanuatu                          | vu           |
| Venezuela                        | ve           |
| Vietnam                          | vn           |
| West Sahara                      | eh           |
| Yemen                            | ye           |
| Zambia                           | zm           |
| Zimbabwe                         | zw           |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
