# JupyterLab Tutorial 

###### ...for the [Jupyter workshop](https://indico.desy.de/indico/event/23354/) during the [17th International Conference on Accelerator and Large Experimental Physics Control Systems (ICALEPSC2019)](https://icalepcs2019.bnl.gov/workshops.html)


JupyterLab is the next generation of the notebook interface. This talk
will start with an overview of the JupyterLab interface to show how it
can be used for more than just editing notebooks.  JupyterLab was
designed with extensibility in mind, so next I will show how to create
a plugin that adds custom functionality to the interface. Then I will
show some existing extensions that target the scientific ecosystem,
including support for exploring HDF5 files. Finally, I will end with
an exploration of new features coming to JupyterLab.


## Setup

```bash
conda env create -f environment.yml
conda activate icalepcs-2019-jupyterlab
./postBuild

jupyter lab
```
