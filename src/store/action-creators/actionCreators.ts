import * as StatisticsActionCreators from './countriesCreators';
import * as GeoDataActionCreators from './geoDataCreators';

export default {
  ...StatisticsActionCreators,
  ...GeoDataActionCreators,
};
