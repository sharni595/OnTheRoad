import { gql } from '@apollo/client';

export const GET_ME = gql`
query {
    me {
        _id
        username
        email
        roadtrips {
            _id
            name
            destination
        }
        expenses {
            _id
            cost
            category
            comment
        }
    }
}
`;

export const SINGLE_USER = gql`
query {
    user {
        _id
        username
        email
        roadtrips {
            _id
            name
            destination
        }
        expenses {
            _id
            cost
            category
            comment
        }
    }
}
`;

export const MANY_USERS = gql`
query {
    users {
        _id
        username
        email
        roadtrips {
            _id
            name
            destination
        }
        expenses {
            _id
            cost
            category
            comment
        }
    }
}
`;

export const SINGLE_TRIP = gql`
query {
    roadtrip {
        _id
        name
        destination
        playlist
        images {
            _id
            username
            url
            alt
        }
        expenses {
            _id
            category
            cost
            comment
            username
        }
        stops {
            _id
            lat
            lon
        }
        user {
            _id
            username
            roadtrips
            expenses
        }
    }
}
`;

export const MANY_TRIPS = gql`
query {
    roadtrips {
        _id
        name
        destination
        playlist
        images {
            _id
            username
            url
            alt
        }
        expenses {
            _id
            category
            cost
            comment
            username
        }
        stops {
            _id
            lat
            lon
        }
        user {
            _id
            username
            roadtrips
            expenses
        }
    }
}
`;