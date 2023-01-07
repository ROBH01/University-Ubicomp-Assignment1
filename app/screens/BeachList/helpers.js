import { SORT_TYPES } from './constants';

function sortBeaches(beaches, sortType) {
    switch (sortType) {
        case SORT_TYPES.alphabetic.value:
            return beaches.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1));
        case SORT_TYPES.availableSpaces.value:
            return beaches.filter(({ beachStatus }) => beachStatus === 'Low congestion');
        case SORT_TYPES.parking.value:
            return beaches.filter(
                ({ parkingAvailability }) => parkingAvailability !== 'No parking at this beach',
            );
        case SORT_TYPES.lifeguarded.value:
            return beaches.filter(({ lifeguarded }) => lifeguarded);
        case SORT_TYPES.toilets.value:
            return beaches.filter(({ publicToilets }) => publicToilets);
        case SORT_TYPES.dogWalking.value:
            return beaches.filter(({ dogWalking }) => dogWalking);
        case SORT_TYPES.cycling.value:
            return beaches.filter(({ cycling }) => cycling);
        case SORT_TYPES.bbq.value:
            return beaches.filter(({ bbq }) => bbq !== 'Not allowed');
        default:
            return beaches.sort((a, b) => (a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1));
    }
}

export { sortBeaches };
