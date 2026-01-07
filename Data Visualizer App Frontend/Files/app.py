import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import plotly.figure_factory as ff

st.set_page_config(layout="wide")
st.title("📊 Universal Excel Plotly Graph Visualizer")

uploaded_file = st.file_uploader("Upload your Excel file", type=["xlsx"])

if uploaded_file:
    df = pd.read_excel(uploaded_file, header=None if st.checkbox("First row is not header") else 0)
    st.dataframe(df, use_container_width=True)

    chart_categories = {
        "Simple": ["Scatter", "Bar", "Line", "Area", "Heatmap", "Table", "Contour", "Pie"],
        "Distributions": ["Box", "Violin", "Histogram", "2D Histogram", "2D Contour Histogram"],
        "3D": ["3D Scatter", "3D Line", "3D Surface", "3D Mesh", "Cone", "Streamtube"],
        "Maps": ["Tile Map", "Atlas Map", "Choropleth Map", "Choropleth Atlas Map", "Density Tile Map"],
        "Finance": ["Candlestick", "OHLC", "Waterfall", "Funnel", "Funnel Area"],
        "Specialized": ["Polar Scatter", "Polar Bar", "Ternary Scatter", "Sunburst", "Treemap", "Sankey"]
    }

    category = st.selectbox("Select Chart Category", list(chart_categories.keys()))
    chart_type = st.selectbox("Select Chart Type", chart_categories[category])

    x_col = st.selectbox("X Axis", df.columns, key="x") if chart_type not in ["Table", "Sunburst", "Treemap", "Sankey"] else None
    y_col = st.selectbox("Y Axis", df.columns, key="y") if chart_type not in ["Table", "Sunburst", "Treemap", "Sankey"] else None

    fig = None

    try:
        if chart_type == "Scatter":
            fig = px.scatter(df, x=x_col, y=y_col)
        elif chart_type == "Bar":
            fig = px.bar(df, x=x_col, y=y_col)
        elif chart_type == "Line":
            fig = px.line(df, x=x_col, y=y_col)
        elif chart_type == "Area":
            fig = px.area(df, x=x_col, y=y_col)
        elif chart_type == "Heatmap":
            fig = px.imshow(df.corr())
        elif chart_type == "Table":
            fig = go.Figure(data=[go.Table(header=dict(values=list(df.columns)), cells=dict(values=[df[col] for col in df.columns]))])
        elif chart_type == "Contour":
            fig = px.density_contour(df, x=x_col, y=y_col)
        elif chart_type == "Pie":
            fig = px.pie(df, names=x_col, values=y_col)

        elif chart_type == "Box":
            fig = px.box(df, x=x_col, y=y_col)
        elif chart_type == "Violin":
            fig = px.violin(df, x=x_col, y=y_col)
        elif chart_type == "Histogram":
            fig = px.histogram(df, x=x_col)
        elif chart_type == "2D Histogram":
            fig = px.density_heatmap(df, x=x_col, y=y_col)
        elif chart_type == "2D Contour Histogram":
            fig = ff.create_2d_density(df[x_col], df[y_col])

        elif chart_type == "3D Scatter":
            z_col = st.selectbox("Z Axis", df.columns, key="z")
            fig = px.scatter_3d(df, x=x_col, y=y_col, z=z_col)
        elif chart_type == "3D Line":
            z_col = st.selectbox("Z Axis", df.columns, key="z_line")
            fig = go.Figure(data=[go.Scatter3d(x=df[x_col], y=df[y_col], z=df[z_col], mode='lines')])
        elif chart_type == "3D Surface":
            fig = go.Figure(data=[go.Surface(z=df.values)])
        elif chart_type == "3D Mesh":
            z_col = st.selectbox("Z Axis", df.columns, key="z_mesh")
            fig = go.Figure(data=[go.Mesh3d(x=df[x_col], y=df[y_col], z=df[z_col])])
        elif chart_type == "Cone":
            fig = go.Figure(data=go.Cone(x=df[x_col], y=df[y_col], z=df.iloc[:,2]))
        elif chart_type == "Streamtube":
            fig = go.Figure(data=go.Streamtube(x=df[x_col], y=df[y_col], z=df.iloc[:,2], u=df.iloc[:,3], v=df.iloc[:,4], w=df.iloc[:,5]))

        elif chart_type == "Candlestick":
            fig = go.Figure(data=[go.Candlestick(x=df[df.columns[0]], open=df[df.columns[1]], high=df[df.columns[2]], low=df[df.columns[3]], close=df[df.columns[4]])])
        elif chart_type == "OHLC":
            fig = go.Figure(data=[go.Ohlc(x=df[df.columns[0]], open=df[df.columns[1]], high=df[df.columns[2]], low=df[df.columns[3]], close=df[df.columns[4]])])
        elif chart_type == "Waterfall":
            fig = go.Figure(go.Waterfall(x=df[x_col], y=df[y_col]))
        elif chart_type == "Funnel":
            fig = px.funnel(df, x=x_col, y=y_col)
        elif chart_type == "Funnel Area":
            fig = px.funnel_area(df, names=x_col, values=y_col)

        elif chart_type == "Polar Scatter":
            fig = px.scatter_polar(df, r=y_col, theta=x_col)
        elif chart_type == "Polar Bar":
            fig = px.bar_polar(df, r=y_col, theta=x_col)
        elif chart_type == "Ternary Scatter":
            a = st.selectbox("A Axis", df.columns, key="a")
            b = st.selectbox("B Axis", df.columns, key="b")
            c = st.selectbox("C Axis", df.columns, key="c")
            fig = px.scatter_ternary(df, a=a, b=b, c=c)
        elif chart_type == "Sunburst":
            fig = px.sunburst(df, path=[df.columns[0], df.columns[1]], values=df.columns[2])
        elif chart_type == "Treemap":
            fig = px.treemap(df, path=[df.columns[0], df.columns[1]], values=df.columns[2])
        elif chart_type == "Sankey":
            fig = go.Figure(data=[go.Sankey(
                node=dict(label=df[df.columns[0]].unique().tolist()),
                link=dict(
                    source=df[df.columns[0]].astype('category').cat.codes,
                    target=df[df.columns[1]].astype('category').cat.codes,
                    value=df[df.columns[2]]))])

        # 🗺️ MAP VISUALIZATIONS
        elif chart_type == "Tile Map":
            if 'lat' in df.columns and 'lon' in df.columns:
                fig = px.scatter_mapbox(df, lat='lat', lon='lon', zoom=3, height=600)
                fig.update_layout(mapbox_style="open-street-map")
            else:
                st.warning("Tile Map requires 'lat' and 'lon' columns.")

        elif chart_type == "Atlas Map":
            if 'country' in df.columns and y_col:
                fig = px.choropleth(df, locations='country', locationmode='country names', color=y_col)
            else:
                st.warning("Atlas Map requires 'country' column and a value column.")

        elif chart_type == "Choropleth Map":
            if 'iso_alpha' in df.columns and y_col:
                fig = px.choropleth(df, locations='iso_alpha', color=y_col)
            else:
                st.warning("Choropleth Map requires 'iso_alpha' (ISO country codes) and a value column.")

        elif chart_type == "Choropleth Atlas Map":
            if 'iso_alpha' in df.columns and y_col:
                fig = px.choropleth(df, locations='iso_alpha', color=y_col, projection="natural earth")
            else:
                st.warning("Choropleth Atlas Map requires 'iso_alpha' and value column.")

        elif chart_type == "Density Tile Map":
            if 'lat' in df.columns and 'lon' in df.columns:
                fig = px.density_mapbox(df, lat='lat', lon='lon', z=y_col, radius=10, center=dict(lat=0, lon=0), zoom=1, mapbox_style="stamen-terrain")
            else:
                st.warning("Density Tile Map requires 'lat' and 'lon' columns.")

        if fig:
            st.plotly_chart(fig, use_container_width=True)

    except Exception as e:
        st.error(f"Error rendering chart: {e}")
