// 1) Tính điểm trung bình của cả danh sách
// Danh sách rỗng thì trả về 0
export function diemTrungBinh(ds) {
    if (ds.length === 0) {
        return 0;
    }

    const tongDiem = ds.reduce((tong, sv) => tong + sv.score, 0);

    return tongDiem / ds.length;
}

// 2) Trả về mảng tên, sắp xếp theo tiếng Việt
export function layTen(ds) {
    return ds
        .map(sv => sv.name)
        .toSorted((a, b) => a.localeCompare(b, 'vi'));
}

// 3) Xếp loại theo điểm
export function xepLoai(diem) {
    if (diem >= 8) {
        return 'Giỏi';
    } else if (diem >= 6.5) {
        return 'Khá';
    } else if (diem >= 5) {
        return 'Trung bình';
    } else {
        return 'Yếu';
    }
}

// 4) Nhóm sinh viên theo lớp
// Trả về object dạng { Web1: [sv, sv], Web2: [sv] }
export function nhomTheoLop(ds) {
    return ds.reduce((nhom, sv) => {
        if (!nhom[sv.class]) {
            nhom[sv.class] = [];
        }

        nhom[sv.class].push(sv);

        return nhom;
    }, {});
}

// 5) Lấy n sinh viên có điểm cao nhất
// Nếu điểm bằng nhau thì sắp xếp theo tên tiếng Việt
export function top(ds, n) {
    return ds
        .toSorted((a, b) => {
            return b.score - a.score || a.name.localeCompare(b.name, 'vi');
        })
        .slice(0, Math.max(0, n));
}

const ds = [
    { name: 'An', class: 'Web1', score: 8 },
    { name: 'Bình', class: 'Web2', score: 9 },
    { name: 'Cường', class: 'Web1', score: 6.5 },
    { name: 'Dũng', class: 'Web2', score: 4 }
];

console.log(diemTrungBinh(ds)); // 6.875

console.log(layTen(ds));
// ['An', 'Bình', 'Cường', 'Dũng']

console.log(xepLoai(8)); // 'Giỏi'

console.log(nhomTheoLop(ds));
// {
//   Web1: [An, Cường],
//   Web2: [Bình, Dũng]
// }

console.log(top(ds, 2));
// [
//   { name: 'Bình', class: 'Web2', score: 9 },
//   { name: 'An', class: 'Web1', score: 8 }
// ]
window.ds = ds;
window.diemTrungBinh = diemTrungBinh;
window.layTen = layTen;
window.xepLoai = xepLoai;
window.nhomTheoLop = nhomTheoLop;
