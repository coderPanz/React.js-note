import { useTasks, useTasksDispatch } from "./TaskReducer";

// 使用自己定义Hook
export default function AddList() {
  const tasks = useTasks()
  const dispatch = useTasksDispatch()
  return (
    <>
      {tasks.map((item) => {
        return (
          <div key={item.id}>
            <h3></h3>
            {item.done ? (
              <>
                <input type="checkbox" />
                {item.text}
                <button
                  onClick={() => {
                    dispatch({
                      type: "change",
                      id: item.id,
                      isEdit: item.done,
                      text: item.text,
                    });
                  }}
                >
                  编辑
                </button>
              </>
            ) : (
              <>
                <input type="checkbox" />
                <input type="text" defaultValue={item.text} id="listInput" />
                <button
                  onClick={() => {
                    let text = document.getElementById("listInput").value;
                    dispatch({
                      type: "change",
                      id: item.id,
                      isEdit: item.done,
                      text: text,
                    });
                  }}
                >
                  保存
                </button>
              </>
            )}
            <button
              onClick={() => {
                dispatch({
                  type: "delete",
                  id: item.id,
                })
              }}
            >
              删除
            </button>
          </div>
        );
      })}
    </>
  );
}
