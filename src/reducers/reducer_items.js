import { SEARCH_ITEMS } from '../actions';

const DATA = [
  {
    name: "Huỳnh Tuấn Anh",
    image: "https://source.unsplash.com/random/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  },
  {
    name: "Huỳnh Tuấn Huy",
    image: "https://source.unsplash.com/collection/190727/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  },
  {
    name: "Nguyễn Minh Tú",
    image: "https://source.unsplash.com/collection/190726/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  },
  {
    name: "Nguyễn Quang Huy",
    image: "https://source.unsplash.com/random/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  },
  {
    name: "Đặng Nguyễn Phương Trang",
    image: "https://source.unsplash.com/user/erondu/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  },
  {
    name: "Huỳnh Tuấn Anh",
    image: "https://source.unsplash.com/random/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  },
  {
    name: "Huỳnh Tuấn Huy",
    image: "https://source.unsplash.com/collection/190727/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  },
  {
    name: "Nguyễn Minh Tú",
    image: "https://source.unsplash.com/collection/190726/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  },
  {
    name: "Nguyễn Quang Huy",
    image: "https://source.unsplash.com/random/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  },
  {
    name: "Đặng Nguyễn Phương Trang",
    image: "https://source.unsplash.com/user/erondu/150x100",
    records: [
      {
        className: "C4E12",
        role: "Coach"
      },
      {
        className: "C4E13",
        role: "Instructor"
      },
      {
        className: "C4E14",
        role: "Instructor"
      }
    ]
  }
];

export default function(state = [], action) {
    switch (action.type) {
      case SEARCH_ITEMS:
        return DATA.filter(item => {
          return item.name.includes(action.payload);
        });
    }

    return DATA;
}
