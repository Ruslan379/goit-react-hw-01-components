import PropTypes from 'prop-types';







export function Statistics({ items = [] }) {
    return (
    <section class="statistics">
    <h2 class="title">Upload stats</h2>

    <ul class="stat-list">
        {items.map(item => (
            <li key={item.id}>
                <span class="label">{item.label}</span>
                <span class="percentage">{item.percentage}</span>
            </li>
        ))}
    </ul>
    </section>
    );
};



// Profile.propTypes = {
//   username: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// };



