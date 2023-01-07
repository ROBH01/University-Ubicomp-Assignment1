import { Picker } from '@react-native-picker/picker';
import { SORT_TYPES } from '../constants';

const CustomPicker = ({ selectedValue, handler }) => (
    <Picker
        selectedValue={selectedValue}
        mode="dropdown"
        style={{
            width: 165,
            height: 25,
        }}
        onValueChange={handler}
    >
        <Picker.Item label={SORT_TYPES.alphabetic.label} value={SORT_TYPES.alphabetic.value} />
        <Picker.Item
            label={SORT_TYPES.availableSpaces.label}
            value={SORT_TYPES.availableSpaces.value}
        />
        <Picker.Item label={SORT_TYPES.parking.label} value={SORT_TYPES.parking.value} />
        <Picker.Item label={SORT_TYPES.lifeguarded.label} value={SORT_TYPES.lifeguarded.value} />
        <Picker.Item label={SORT_TYPES.toilets.label} value={SORT_TYPES.toilets.value} />
        <Picker.Item label={SORT_TYPES.dogWalking.label} value={SORT_TYPES.dogWalking.value} />
        <Picker.Item label={SORT_TYPES.cycling.label} value={SORT_TYPES.cycling.value} />
        <Picker.Item label={SORT_TYPES.bbq.label} value={SORT_TYPES.bbq.value} />
    </Picker>
);

export default CustomPicker;
